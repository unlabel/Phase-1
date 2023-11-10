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
