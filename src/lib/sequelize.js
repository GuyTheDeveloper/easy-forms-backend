// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("easy_forms", "guy", "peopleAreTools", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

!(async function () {
  try {
    await sequelize.authenticate();
    console.log("db connected");
  } catch (error) {
    console.log("db error: ", error.message);
  }
})();

export { sequelize };
