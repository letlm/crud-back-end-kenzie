import { Request, Response } from "express";
import updateClientService from "../../services/client/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const { name } = req.body;

  await updateClientService(id, name);

  return res.status(200).json({ message: "Updated client" });
};

export default updateClientController;
