import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { ContactClient } from "../../entities/contactClient.entity";

import { IContactClientRequest } from "../../interfaces";

const createContactClientService = async ({
  name,
  telephone,
  email,
}: IContactClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      name: name,
    },
  });

  if (!findClient) {
    throw new AppError(409, "Client not exists!");
  }

  const contactRepository = AppDataSource.getRepository(ContactClient);

  const contact = new ContactClient();
  contact.email = email;
  contact.telephone = telephone;
  contact.client = findClient;

  contactRepository.create(contact);

  await contactRepository.save(contact);

  const { client, ...contact_info } = contact;

  const { password, ...contacts } = client;

  return contacts;
};

export default createContactClientService;
