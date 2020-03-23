import Sequelize, { Model } from "sequelize";

class Deliverie extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        signatureId: Sequelize.STRING,
        canceledAt: Sequelize.DATE,
        startDate: Sequelize.DATE,
        endDate: Sequelize.DATE
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

  static associate(models) {
    this.belongsTo(models.Recipients, {
      foreignKey: "recipient_id",
      as: "recipient"
    });
    this.belongsTo(models.DeliveryMan, {
      foreignKey: "deliveryman_id",
      as: "deliveryman"
    });
    this.hasMany(models.DeliveryProblems, {
      as: "deliveryProblems",
      foreignKey: "delivery_id"
    });
  }

  // Deliverie.associate = models => {
  //   Deliveri.belongsTo(models.DeliveryMan, {
  //     as: "DeliveryMan",
  //     foreignKey: "deliveryman_id"
  //   });
  //   Deliverie.belongsTo(models.Recipients, {
  //     as: "recipient",
  //     foreignKey: "recipient_id"
  //   });
  // };
}
export default Deliverie;
