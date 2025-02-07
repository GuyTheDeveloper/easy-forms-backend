import { UniqueConstraintError } from "sequelize";
import CustomError from "../../errors/CustomError.js";
import User from "../../models/User.js";
import { hashPassword, verifyPassword } from "../../utils/password.js";
import { loginSchema, registerSchema } from "./schema.js";
import { JWT } from "../../lib/jwt.js";
import model from "./model.js";

const LOGIN = async (req, res, next) => {
  try {
    const validatedFields = loginSchema.parse(req.body);
    const user = await model.LOGIN(validatedFields);

    const token = JWT.sign({ userId: user.id }, "3d");

    res.cookie("token", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });

    return res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

const GETALLUSERS = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const REGISTER = async (req, res, next) => {
  try {
    const validatedFields = registerSchema.parse(req.body);
    const user = await model.REGISTER(validatedFields);

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return next(new CustomError("Email already in use"));
    }
    next(error);
  }
};

export default { REGISTER, LOGIN, GETALLUSERS };
