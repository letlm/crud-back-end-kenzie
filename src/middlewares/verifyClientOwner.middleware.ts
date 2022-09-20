import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";
import { decode } from "punycode";

const verifyClientOwnerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing Authentication");
  }

  const tokenSplit = token.split(" ")[1];

  jwt.verify(
    tokenSplit,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(401, "Missing Authentication");
      }

      if (req.params.id != decoded.id) {
        throw new AppError(401, "Missing Permissions");
      }
    }
  );
  next();
};
export default verifyClientOwnerMiddleware;
