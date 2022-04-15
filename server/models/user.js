"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Lot, { foreignKey: "sellerId" });
      User.hasMany(models.Transaction, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      totalMoney: DataTypes.INTEGER,
      totalSpended: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
