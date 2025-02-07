import CustomError from "../../errors/CustomError.js";
import User from "../../models/User.js";
import { hashPassword, verifyPassword } from "../../utils/password.js";

const LOGIN = async ({ email, password }) => {
  const user = await User.scope("withPassword").findOne({
    where: { email },
  });
  const matchPassword = verifyPassword(password, user?.password);

  if (!user || !matchPassword) throw new CustomError("Invalid credentials");

  const { password: pw, ...userData } = user?.toJSON();
  return userData;
};

const REGISTER = async (credentials) => {
  credentials.password = await hashPassword(credentials.password);

  const newUser = (await User.create(credentials))?.toJSON();
  const { password, ...user } = newUser;

  return user;
};

export default {
  LOGIN,
  REGISTER,
};
