import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "../lib/sequelize.js";

class Field extends Model {}

Field.init(
  {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4(), primaryKey: true },
    templateId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "templates", key: "id" },
      type: {
        type: DataTypes.ENUM("string", "text", "integer", "checkbox"),
        allowNull: false,
      },
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    showInTable: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize, modelName: "field" }
);

export default Field;
