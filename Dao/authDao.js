import User from "../Model/userModel.js";
import { SERCET_KEY } from "../constants.js";

// register new user
export const signinUser = async (req) => {
    const {username,password}=req.body;
    
  const user = await User.findOne({ username: username, password: password });
  if (user) {
    const token = jwt.sign({ username:username }, SERCET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ status: "signin", token });
  } else {
    res.status(403).json({
      message: "Invalid username or password",
      token: null,
    });
  }
};

// login user

export const signupUser = async (req) => {};
