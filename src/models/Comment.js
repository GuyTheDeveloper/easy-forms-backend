import { DataTypes, Model, UUIDV4 } from "sequelize";
import { sequelize } from "../lib/sequelize.js";

class Comment extends Model {}

Comment.init(
  {
    id: { type: DataTypes.UUID, defaultValue: UUIDV4(), primaryKey: true },
    templateId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "templates", key: "id" },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    content: { type: DataTypes.TEXT, allowNull: false },
  },
  { sequelize, modelName: "comment" }
);

export default Comment;
