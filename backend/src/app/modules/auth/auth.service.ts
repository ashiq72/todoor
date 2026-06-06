

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./auth.model";


const registerUser = async (payload: any) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const user = await User.create({
    ...payload,
    password: hashedPassword,
  });
  
  console.log("Registered user:", user);
  return user;
};

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  return { token };
};

export const AuthService = {
  registerUser,
  loginUser,
};