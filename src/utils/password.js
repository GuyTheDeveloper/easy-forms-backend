import { scrypt } from "crypto";
import { passwordKeyLen } from "../config.js";

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    scrypt(
      password,
      process.env.SALT_SECRET,
      passwordKeyLen,
      (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString("hex"));
      }
    );
  });
};

const verifyPassword = async (password, hash) => {
  const hashedPassword = await hashPassword(password);
  return hashedPassword === hash;
};

export { verifyPassword, hashPassword };
