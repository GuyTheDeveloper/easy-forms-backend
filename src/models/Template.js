import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "../lib/sequelize.js";

class Template extends Model {}

Template.init(
  {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4(), primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    access: {
      type: DataTypes.ENUM("public", "restricted"),
      allowNull: false,
      defaultValue: "public",
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
  },
  { sequelize, modelName: "template" }
);

export default Template;
