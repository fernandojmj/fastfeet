import Sequelize, { Model } from "sequelize";

class DeliveryMan extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        avatarId: Sequelize.STRING
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
    );
    return this;
  }
}
export default DeliveryMan;
