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
// addSingleUser("Vasya", "study@email.com", "+79780000999");

async function addMultipleUsers(username, email, phone_number) {
  try {
    await hwsequelize.create({ username, email, phone_number });
  } catch (error) {
    console.log("Ошибка при записи нескольких пользователй", error);
  }
}
// addMultipleUsers("dr_mitchell", "test@mail.ru", "+79180000000");
// addMultipleUsers("peter", "work@mail.ru", "+79180000001");

async function getAllUsers() {
  try {
    await hwsequelize.findAll({ raw: true });
  } catch (error) {
    console.log("Что-то пошло не так", error);
  }
}
// getAllUsers();

async function editSingleUser() {
  try {
    await hwsequelize.update({ realname: "Trudy" }, { where: { id: 1 } });
  } catch (error) {
    console.log("Просчитался, но где?", error);
  }
}
// editSingleUser();

async function findUserByName() {
  try {
    await hwsequelize.findOne({
      where: { username: "peter" },
      raw: true,
    });
  } catch (error) {
    console.log("Совпадений не найдено", error);
  }
}

async function countUsers() {
  try {
    await hwsequelize.findAndCountAll({
      where: {
        username: "peter",
      },
      offset: 10,
      limit: 5,
    });
  } catch (error) {
    console.log("Просчитался, но где?", error);
  }
}
// countUsers();

async function deleteUserById() {
  try {
    await hwsequelize.destroy({
      where: {
        id: 7,
      },
    });
  } catch (error) {
    console.log("Зараза, этот пользователь ещё с нами", error);
  }
}
deleteUserById();
