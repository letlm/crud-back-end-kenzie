import { Request, Response } from "express";
import loginService from "../services/login.service";

const loginController = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const login = await loginService({ name, password });

  return res.status(200).json({ token: login });
};

export default loginController;
