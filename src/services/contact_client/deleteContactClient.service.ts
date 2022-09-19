import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { ContactClient } from "../../entities/contactClient.entity";
import { AppError } from "../../errors/appError";

const deleteContactClientService = async (id: string, idContact: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const findClient = await clientRepository.findOneBy({
    id: id,
  });

  if (!findClient) {
    throw new AppError(404, "Client not found!");
  }

  const contactExists = findClient.contacts.find(
    (contact) => contact.id === parseInt(idContact)
  );

  if (!contactExists) {
    throw new AppError(404, "Client contact not found!");
  }
  const infoRepository = AppDataSource.getRepository(ContactClient);

  await infoRepository.delete({ id: parseInt(idContact) });
};

export default deleteContactClientService;
