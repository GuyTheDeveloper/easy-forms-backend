import { sequelize } from "../lib/sequelize.js";
import Answer from "./Answer.js";
import Comment from "./Comment.js";
import Field from "./Field.js";
import Form from "./Form.js";
import Like from "./Like.js";
import Template from "./Template.js";
import User from "./User.js";

User.hasMany(Template, { foreignKey: "authorId" });
Template.belongsTo(User, { foreignKey: "authorId" });
Template.hasMany(Field, { foreignKey: "templateId" });
Template.hasMany(Form, { foreignKey: "templateId" });
Template.hasMany(Comment, { foreignKey: "templateId" });
Template.hasMany(Like, { foreignKey: "templateId" });

Form.belongsTo(User, { foreignKey: "userId" });
Form.belongsTo(Template, { foreignKey: "templateId" });
Form.hasMany(Answer, { foreignKey: "formId" });

Answer.belongsTo(Field, { foreignKey: "fieldId" });
Comment.belongsTo(User, { foreignKey: "userId" });
Like.belongsTo(User, { foreignKey: "userId" });

!(async function () {
  await sequelize.sync();
})();
