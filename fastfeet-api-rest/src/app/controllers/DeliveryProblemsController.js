import DeliveyProblems from "../models/DeliveryProblems";
import moment from "moment-timezone";
import Sequelize from "sequelize";
import DeliveryMan from "../models/DeliveryMan";
import Deliverie from "../models/Deliverie";
import Recipient from "../models/Recipients";

import DeliveryProblems from "../models/DeliveryProblems";
import Queue from "../../lib/Queue";
import DeliveryCancelMail from "../jobs/DeliveryCancelMail";

class DeliveryProblemsController {
  //entregador cadastrar problemas na entrega apenas informando seu ID de cadastro (ID da encomenda no banco de dados);
  async create(req, res) {
    console.log(req.params);
    const rec = await DeliveyProblems.create({
      ...req.body,
      delivery_id: req.params.id,
    });

    return res.json(rec);
  }

  // todos os problemas de uma encomenda baseado no ID da encomenda.
  async findProblemsByDelivery(req, res) {
    const Op = Sequelize.Op;

    const response = await DeliveyProblems.findAll({
      where: {
        delivery_id: {
          [Op.eq]: req.params.id,
        },
      },
    });

    return res.json({ response });
  }

  async showAll(req, res) {
    const Op = Sequelize.Op;

    const response = await DeliveyProblems.findAll();

    return res.json({ response });
  }
  //distribuidora cancelar uma entrega baseado no ID do problema.
  async cancelDeliveryByproblems(req, res) {
    const Op = Sequelize.Op;

    let response = await DeliveyProblems.findAll({
      include: [{ model: Deliverie, as: "delivery" }],
      where: {
        id: {
          [Op.eq]: req.params.id,
        },
      },
    });
    let idDelivery = null;
    let delivery = null;
    let deliveryProblem = null;
    response.map((item) => {
      console.log(item.delivery.id);
      delivery = item.delivery;
      idDelivery = item.delivery.id;
      deliveryProblem = item;
    });

    if (delivery == null) {
      return response.status(400).json({ error: "Encomenda não encontrada" });
    }

    if (delivery.canceled_at) {
      return response
        .status(401)
        .json({ error: "A encomenda já está cancelada" });
    }

    const dataAtual = await moment().format();
    const requestUpdate = {
      canceledAt: dataAtual,
    };
    await Deliverie.update(requestUpdate, {
      where: {
        id: {
          [Op.eq]: idDelivery,
        },
      },
    }).then(function (rowsUpdated) {
      rowsUpdated.map((item) => {
        if (item === 1) {
          response = true;
        } else {
          response = false;
        }
      });
    });

    const recipient = await Recipient.findByPk(delivery.recipient_id);
    const deliveryMan = await DeliveryMan.findByPk(delivery.deliveryman_id);

    await Queue.add(DeliveryCancelMail.key, {
      deliveryman: deliveryMan,
      recipient,
      delivery,
      problem: deliveryProblem,
    });

    return res.json({ response });
  }
}

export default new DeliveryProblemsController();
