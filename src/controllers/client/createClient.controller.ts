import { Request, Response } from "express";
import createClientService from "../../services/client/createClient.service";

const createClientController = async (req: Request, res: Response) => {
  const { name, email, password, telephone } = req.body;

  const newClient = await createClientService({
    name,
    email,
    password,
    telephone,
  });

  return res.status(201).json(newClient);
};

export default createClientController;
