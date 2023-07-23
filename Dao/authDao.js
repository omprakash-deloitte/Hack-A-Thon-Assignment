import User from "../Model/userModel.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import Employee from "../Model/employeeModel.js";
import mongoose from "mongoose";
import Organizer from "../Model/organizerModel.js";

// set process.env
config();

const SERCET_KEY = process.env.SERCET_KEY;
// register new user
export const signupUser = async (req) => {
  const { username, password, ...employeeData } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      throw new Error("Username already exists");
    }
    const newEmployee = await Employee.create({ ...employeeData });
    const newUser = await User.create({
      username,
      password,
      employeeId: newEmployee._id.id.toString("hex"),
    });

    await session.commitTransaction();
    session.endSession();

    const token = jwt.sign({ username: req.body?.username }, SERCET_KEY, {
      expiresIn: "1hr",
    });
    return { status: "signup completed", token: token };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return { status: "Username is alerady taken , use different", token: null };
  }
};

// login user
export const signinUser = async (req) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username, password: password });
  if (user) {
    const token = jwt.sign({ username: username }, SERCET_KEY, {
      expiresIn: "1hr",
    });
    return { status: "signin", token };
  } else {
    return {
      message: "Invalid username or password",
      token: null,
    };
  }
};

// register organizer

// signupOrganizer
export const signupOrganizer = async (req) => {
  const { username, password, ...organizerData } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      throw new Error("Username already exists");
    }
    const newOrganizer = await Organizer.create({ ...organizerData });
    const newUser = await User.create({
      username,
      password,
      userId: newOrganizer._id.id.toString("hex"),
    });

    await session.commitTransaction();
    session.endSession();

    const token = jwt.sign({ username: req.body?.username }, SERCET_KEY, {
      expiresIn: "1hr",
    });
    return { status: "signup completed", token: token };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return { status: "Username is alerady taken , use different", token: null };
  }
};
