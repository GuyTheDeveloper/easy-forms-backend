import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "../lib/sequelize.js";

class Answer extends Model {}

Answer.init(
  {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4(), primaryKey: true },
    formId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "forms", key: "id" },
    },
    fieldId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "fields", key: "id" },
    },
    value: { type: DataTypes.TEXT, allowNull: false },
  },
  { sequelize, modelName: "answer" }
);

export default Answer;
