import { Request, Response } from "express";
import updateContactClientService from "../../services/contact_client/updateContactClient.service";

const updateContactClientController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const idContact = req.params.idContact;
  const data = req.body;

  await updateContactClientService(id, idContact, data);

  return res.status(200).json({ message: "Contact updated with sucess!" });
};

export default updateContactClientController;
