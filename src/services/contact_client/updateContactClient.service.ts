import { AppDataSource } from "../../data-source";

import { Client } from "../../entities/client.entity";
import { ContactClient } from "../../entities/contactClient.entity";
import { AppError } from "../../errors/appError";

const updateContactClientService = async (
  id: string,
  idContact: string,
  data: any
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: id,
  });

  if (!client) {
    throw new AppError(400, "Client not found");
  }

  const clientInfoRepository = AppDataSource.getRepository(ContactClient);

  const contactExists = await clientInfoRepository.findOneBy({
    id: parseInt(idContact),
  });

  if (!contactExists) {
    throw new AppError(400, "Client contact not found!");
  }

  await clientInfoRepository.update(idContact, {
    ...contactExists,
    ...data,
  });
  return;
};

export default updateContactClientService;
