import Deliveri from "../models/Deliverie";
import moment from "moment-timezone";
import Sequelize from "sequelize";
import DeliveryProblems from "../models/DeliveryProblems";
import Deliverie from "../models/Deliverie";

class DeliveriController {
  async show(req, res) {
    const rec = await Deliveri.findByPk(req.params.id);
    return res.json(rec);
  }

  async showAll(req, res) {
    const rec = await Deliveri.findAll();
    return res.json(rec);
  }

  async create(req, res) {
    console.log(req.body);
    const { recipient_id } = req.body;
    const { deliveryman_id } = req.body;
    const DeliveryMan = deliveryman_id;
    const recipient = recipient_id;

    const rec = await Deliveri.create({
      ...req.body,
      recipient_id: recipient,
      deliveryman_id: DeliveryMan
    });

    return res.json(rec);
  }

  async update(req, res) {
    Deliveri.update(req.body, {
      returning: false,
      where: { id: req.params.id }
    }).then(function(rowsUpdated) {
      return res.json(rowsUpdated);
    });
  }

  async delete(req, res) {
    Deliveri.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(rowDeleted) {
      // rowDeleted will return number of rows deleted
      if (rowDeleted === 1) {
        return res.json({ return: true });
      } else {
        return res.json({ return: false });
      }
    });

    // return res.send();
  }

  async withdrawal(req, res) {
    const Op = Sequelize.Op;
    // moment.locale();
    const horaAtual = moment().hour();
    const hourEnd = await !moment(horaAtual).isAfter(23);
    const hourStart = await moment(horaAtual).isAfter(8);
    let returnWithdrawal = false;

    const qtdRetiradaDia = await Deliveri.findAll({
      where: {
        startDate: {
          [Op.between]: [
            moment().format("YYYY-MM-DD") + " " + "00:00:00",
            moment().format("YYYY-MM-DD") + " " + "23:59:59"
          ]
        },
        deliveryman_id: req.params.deliveryManId
      }
    });

    // console.log(res.json(qtdRetiradaDia));
    console.log(qtdRetiradaDia.length);

    if (qtdRetiradaDia.length < 5) {
      //Atualiza data de retira dentro do horario permitido
      if (hourEnd && hourStart) {
        console.log("retirada Permitida");

        const dataAtual = await moment().format();
        console.log(dataAtual);
        const requestUpdate = {
          startDate: dataAtual
        };

        await Deliveri.update(requestUpdate, {
          returning: false,
          where: { id: req.params.id }
        }).then(function(rowsUpdated) {
          rowsUpdated.map(item => {
            if (item === 1) {
              returnWithdrawal = true;
            }
          });
        });
      } else {
        return res.json({
          Withdrawal: "Horario não permitido para retirada"
        });
      }
    } else {
      return res.json({
        Withdrawal:
          "Você possui " +
          qtdRetiradaDia.length +
          " e não pode realizar mais retiradas hoje. "
      });
    }

    return res.json({
      Withdrawal: returnWithdrawal
    });
  }

  async deliveryEnd(req, res) {
    console.log(req.params);
    // moment.locale();
    const dataAtual = await moment().format();
    const requestUpdate = {
      endDate: dataAtual
    };
    let response = false;
    await Deliveri.update(requestUpdate, {
      returning: false,
      where: { id: req.params.id }
    }).then(function(rowsUpdated) {
      rowsUpdated.map(item => {
        if (item === 1) {
          response = true;
        }
      });
    });
  }
  async deliveryEndManual(req, res) {
    console.log(req.params);
    // moment.locale();
    const datafinalizing = req.body.endDate;
    const id = req.body.id;
    const requestUpdate = {
      endDate: datafinalizing
    };
    let response = false;
    await Deliveri.update(requestUpdate, {
      returning: false,
      where: { id: id }
    }).then(function(rowsUpdated) {
      rowsUpdated.map(item => {
        if (item === 1) {
          response = true;
        }
      });
    });
    return res.json({
      end: response
    });
  }

  async deliveryStartManual(req, res) {
    console.log(req.params);
    // moment.locale();
    const dataStart = req.body.startDate;
    const id = req.body.id;
    const Op = Sequelize.Op;

    const qtdRetiradaDia = await Deliveri.findAll({
      where: {
        startDate: {
          [Op.between]: [
            moment().format("YYYY-MM-DD") + " " + "00:00:00",
            moment().format("YYYY-MM-DD") + " " + "23:59:59"
          ]
        },
        deliveryman_id: req.body.deliveryManId
      }
    });

    // console.log(res.json(qtdRetiradaDia));
    console.log(qtdRetiradaDia.length);

    if (qtdRetiradaDia.length < 5) {
      const requestUpdate = {
        startDate: dataStart
      };
      let response = false;
      await Deliveri.update(requestUpdate, {
        returning: false,
        where: { id: id }
      }).then(function(rowsUpdated) {
        rowsUpdated.map(item => {
          if (item === 1) {
            response = true;
          }
        });
      });
    } else {
      return res.json({
        response: `Você possui ${qtdRetiradaDia.length} retiradas e não pode realizar mais retiradas hoje`
      });
    }

    return res.json({
      response: response
    });
  }

  async findDeliveryByDeliveryMan(req, res) {
    const Op = Sequelize.Op;
    const response = await Deliveri.findAll({
      where: {
        endDate: {
          [Op.is]: null
        },
        canceled_at: {
          [Op.is]: null
        },
        deliveryman_id: req.params.id
      }
    });

    return res.json({ response });
  }

  async findDeliveredByDeliveryMan(req, res) {
    const Op = Sequelize.Op;
    const response = await Deliveri.findAll({
      where: {
        endDate: {
          [Op.not]: null
        },
        deliveryman_id: req.params.id
      }
    });

    return res.json({ response });
  }
  //listar todas as entregas com algum problema
  async findDeliveryWithProblems(req, res) {
    const Op = Sequelize.Op;
    const response = await Deliverie.findAll({
      include: [
        {
          model: DeliveryProblems,
          as: "deliveryProblems",
          where: {
            delivery_id: {
              [Op.not]: null
            }
          }
        }
      ]
    });

    return res.json({ response });
  }
  //lista de encomendas por nome do produto
  async findDeliveryByProduct(req, res) {
    const Op = Sequelize.Op;
    const filter = req.query.filter;
    let response = [];
    if (filter !== undefined) {
      response = await Deliverie.findAll({
        where: {
          product: {
            [Op.like]: `%${filter}%`
          }
        }
      });
    } else {
      response = await Deliverie.findAll();
    }

    return res.json({ response });
  }
}

export default new DeliveriController();