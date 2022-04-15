"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lot.belongsTo(models.Collection, {
        foreignKey: "collectionId"
      });
      Lot.belongsTo(models.User, { foreignKey: "sellerId" });
    }
  }
  Lot.init(
    {
      name: DataTypes.STRING,
      collectionId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      startingBid: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Lot"
    }
  );
  return Lot;
};
