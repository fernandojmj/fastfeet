import Recipients from "../models/Recipients";

class RecipientsController {
  async show(req, res) {
    const rec = await Recipients.findByPk(req.params.id);
    return res.json(rec);
  }

  async showAll(req, res) {
    const rec = await Recipients.findAll();
    return res.json(rec);
  }

  async create(req, res) {
    console.log(req.name);
    const rec = await Recipients.create({
      ...req.body
    });

    return res.json(rec);
  }

  async update(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    Recipients.update(req.body, {
      returning: false,
      where: { id: req.params.id }
    }).then(function(rowsUpdated) {
      return res.json(rowsUpdated);
    });
  }

  async delete(req, res) {
    Recipients.destroy({
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
}

export default new RecipientsController();
