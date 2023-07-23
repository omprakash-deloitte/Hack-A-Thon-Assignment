
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const SERCET_KEY=process.env.SERCET_KEY;


export const verifyAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (token) {
       jwt.verify(token, SERCET_KEY, (err, payload) => {
        if (!err) {
          req.payload = payload;
          next();
        } else {
          res.json({
            message: "Invalid Token",
            error: err,
          });
        }
      });
    } else {
      res.json({
        message: "Provide token",
      });
    }
    
  };