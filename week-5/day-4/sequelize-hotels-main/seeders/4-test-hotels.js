"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hotels = ["Moscow", "Pushkin", "East", "Mria"];
    const hotelsData = hotels.map((name) => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return queryInterface.bulkInsert("Hotels", hotelsData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Hotels");
  },
};
