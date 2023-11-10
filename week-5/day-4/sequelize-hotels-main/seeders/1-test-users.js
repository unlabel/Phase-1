"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = ["Peter", "Vasya", "John", "Maria"];
    const usersData = users.map((name) => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return queryInterface.bulkInsert("Users", usersData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users");
  },
};
