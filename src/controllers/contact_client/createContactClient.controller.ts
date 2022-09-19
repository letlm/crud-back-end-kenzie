import { Request, Response } from "express";
import createClientService from "../../services/client/createClient.service";
import createContactClientService from "../../services/contact_client/createContactClient.service";

const createContactClientController = async (req: Request, res: Response) => {
  const { name, email, telephone } = req.body;

  const newClient = await createContactClientService({
    name,
    email,
    telephone,
  });

  return res.status(201).json(newClient);
};

export default createContactClientController;
