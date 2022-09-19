import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { ContactClient } from "../../entities/contactClient.entity";
import * as bcryptjs from "bcryptjs";
import { IClientRequest } from "../../interfaces";

const createClientService = async ({
  name,
  email,
  password,
  telephone,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      name: name,
    },
  });

  if (findClient) {
    throw new AppError(409, "Client already exists!");
  }

  const contactRepository = AppDataSource.getRepository(ContactClient);

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const clientRegister = new Client();
  clientRegister.name = name;
  clientRegister.password = hashedPassword;

  clientRepository.create(clientRegister);
  await clientRepository.save(clientRegister);

  const contact = new ContactClient();
  contact.email = email;
  contact.telephone = telephone;
  contact.client = clientRegister;
  contactRepository.create(contact);

  await contactRepository.save(contact);

  const { client, ...contact_info } = contact;

  const returnClient = {
    id: client.id,
    name: client.name,
    created_at: client.created_at,
    updated_at: client.update_at,
    contacts: contact_info,
  };

  return returnClient;
};

export default createClientService;
