const db = require("./models");
const { hwsequelize } = require("./models/");

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("Success connect");
  } catch (error) {
    console.log("Error -------->", error);
  }
}
// testConnection();

async function addSingleUser(username, email, phone_number) {
  try {
    await hwsequelize.create({ username, email, phone_number });
  } catch (error) {
    console.log("Ошибка записи пользователя", error);
  }
}
// addSingleUser("prospector_saloon", "test@email.com", "+79780000000");

async function addMultipleUsers(username, email, phone_number) {
  try {
    await hwsequelize.create({ username, email, phone_number });
  } catch (error) {
    console.log("Ошибка при записи нескольких пользователй", error);
  }
}
addMultipleUsers("dr_mitchell", "test@mail.ru", "+79180000000");
addMultipleUsers("peter", "work@mail.ru", "+79180000001");

function getAllUsers() {}

function editSingleUser() {}

function findUserByName() {}

function countUsers() {}

function deleteUserById() {}
