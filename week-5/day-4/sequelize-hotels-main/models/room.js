"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Booking }) {
      // define association here
      this.belongsTo(Booking, { foreignKey: "booking_room_id" });
    }
  }
  Room.init(
    {
      rate: DataTypes.INTEGER,
      number: DataTypes.INTEGER,
      hotel_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
