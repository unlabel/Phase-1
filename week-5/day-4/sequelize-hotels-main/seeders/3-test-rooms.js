"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rate = [4, 4, 3, 5];
    const number = [16, 24, 26, 42];
    const hotel_id = [1, 2, 3, 4];
    const roomsData = rate.map((rate, index) => ({
      rate: rate,
      number: number[index],
      hotel_id: hotel_id[index],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return queryInterface.bulkInsert("Rooms", roomsData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Rooms");
  },
};
