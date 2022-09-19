import { Request, Response } from "express";
import listOneClientService from "../../services/client/listOneClient.service";

const listOneClientController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const client = await listOneClientService(id);

  return res.status(200).send(client);
};

export default listOneClientController;
