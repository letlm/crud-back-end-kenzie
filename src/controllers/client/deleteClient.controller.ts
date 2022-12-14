import { Request, Response } from "express";
import deleteClientService from "../../services/client/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteClientService(id);

  return res.status(200).json({ message: "Client deleted with sucess!" });
};

export default deleteClientController;
