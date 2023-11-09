const db = require("./models");

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("Success connect");
  } catch (error) {
    console.log("Error -------->", error);
  }
}
testConnection();

function addSingleUser() {}

function addMultipleUsers() {}

function getAllUsers() {}

function editSingleUser() {}

function findUserByName() {}

function countUsers() {}

function deleteUserById() {}
