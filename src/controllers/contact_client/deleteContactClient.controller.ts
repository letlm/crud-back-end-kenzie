import { Request, Response } from "express";
import deleteContactClientService from "../../services/contact_client/deleteContactClient.service";

const deleteContactClientController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const idContact = req.params.idContact;

  await deleteContactClientService(id, idContact);

  return res.status(200).json({ message: "Contact deleted with sucess!" });
};

export default deleteContactClientController;
