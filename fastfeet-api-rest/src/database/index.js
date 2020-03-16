import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import modelUser from "../app/models/User";
import modelRecipients from "../app/models/Recipients";

const models = [modelUser, modelRecipients];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
