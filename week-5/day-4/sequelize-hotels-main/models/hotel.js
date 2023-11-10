"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Room }) {
      // define association here
      this.belongsTo(Room, { foreignKey: "rooms_hotel_id" });
    }
  }
  Hotel.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hotel",
    }
  );
  return Hotel;
};
