import Sequelize, { Model } from "sequelize";

class Deliverie extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        signatureId: Sequelize.STRING,
        canceledAt: Sequelize.DATE,
        startDate: Sequelize.DATE,
        endDate: Sequelize.DATE,
        statusNumber: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.endDate != null) {
              return 2;
              // return "ENTREGUE";
            } else if (this.canceledAt != null) {
              return 3;
              // return "CANCELADA";
            } else if (this.startDate != null) {
              return 1;
              // return "RETIRADA";
            } else {
              return 0;
              // return "PENDENTE";
            }
          },
        },
        statusLiteral: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.endDate != null) {
              return "Entregue";
              // return "ENTREGUE";
            } else if (this.canceledAt != null) {
              return "Cancelada";
              // return "CANCELADA";
            } else if (this.startDate != null) {
              return "Retirada";
              // return "RETIRADA";
            } else {
              return "Pendente";
              // return "PENDENTE";
            }
          },
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipients, {
      foreignKey: "recipient_id",
      as: "recipient",
    });
    this.belongsTo(models.DeliveryMan, {
      foreignKey: "deliveryman_id",
      as: "deliveryman",
    });
    this.hasMany(models.DeliveryProblems, {
      as: "deliveryProblems",
      foreignKey: "delivery_id",
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
