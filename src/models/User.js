import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "../lib/sequelize.js";

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4(), primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "user",
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  }
);

export default User;
