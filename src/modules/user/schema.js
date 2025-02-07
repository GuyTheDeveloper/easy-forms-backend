import { z } from "zod";

const registerSchema = z.object({
  username: z
    .string({ message: "Username is required" })
    .trim()
    .min(1, { message: "Username must contain at least 1 character" })
    .max(100, { message: "Username is too short :)" }),
  email: z
    .string({
      message: "Email is required",
      required_error: "Email is required",
    })
    .trim()
    .email(),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must contain at least 8 character" }),
});

const loginSchema = registerSchema.omit({ username: true });

const getUserSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .trim()
    .email(), //repeated instead of schema.pick({email:true}) because custom error messages doesnt inherited
});

const userSchema = z.object({
  id: z.string().uuid({ message: "Invalid user id" }),
  email: z
    .string({
      message: "Email is required",
    })
    .trim()
    .email(),
  last_modified: z
    .string()
    .nullable()
    .refine((val) => val === null || !isNaN(Date.parse(val)), {
      message: "last_modified must be valid timestamp or null",
    }),
});

const updateUserSchema = z.array(userSchema);
export { registerSchema, loginSchema, getUserSchema, updateUserSchema };
