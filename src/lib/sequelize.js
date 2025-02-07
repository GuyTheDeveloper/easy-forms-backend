// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";
import { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_USER } from "../config.js";

const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
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
