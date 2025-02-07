import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/sequelize.js";

class Like extends Model {}

Like.init(
  {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    templateId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "templates", key: "id" },
    },
  },
  { sequelize, modelName: "like" }
);

export default Like;
