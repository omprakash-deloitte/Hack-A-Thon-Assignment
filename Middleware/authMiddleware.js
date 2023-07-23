
import jwt from "jsonwebtoken";

export const verifyAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    const secretKey = "om12242dfedf";
    if (token) {
      const userPayload = jwt.verify(token, secretKey, (err, payload) => {
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
        message: "invalid token",
      });
    }
  };