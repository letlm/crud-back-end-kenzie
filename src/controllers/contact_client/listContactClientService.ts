import { Request, Response } from "express";
import listContactClientService from "../../services/contact_client/listContactClient.service";
import { instanceToPlain } from "class-transformer";

const listContactClientController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const contactClient = await listContactClientService(id);

  return res.status(200).json(instanceToPlain(contactClient));
};

export default listContactClientController;
