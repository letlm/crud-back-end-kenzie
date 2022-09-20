import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";
import { AppDataSource } from "../data-source";
import { ContactClient } from "../entities/contactClient.entity";

const verifyEmailOrPhoneAvailabilityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const { telephone } = req.body;

  const contactRepository = AppDataSource.getRepository(ContactClient);

  const emailAlreadyExists = await contactRepository.findOne({
    where: {
      email: email,
    },
  });

  if (emailAlreadyExists) {
    return res.status(400).json({ message: "E-mail already registered" });
  }

  const phoneAlreadyExists = await contactRepository.findOne({
    where: {
      telephone: telephone,
    },
  });

  if (phoneAlreadyExists) {
    return res.status(400).json({ message: "Telephone already registered" });
  }

  next();
};

export default verifyEmailOrPhoneAvailabilityMiddleware;
