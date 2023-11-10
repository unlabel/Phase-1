"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const guest_id = [1, 2, 3, 4];
    const room_id = [1, 2, 3, 4];
    const bookingsData = guest_id.map((guest_id, index) => ({
      guest_id: guest_id,
      room_id: room_id[index],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return queryInterface.bulkInsert("Bookings", bookingsData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Bookings");
  },
};
