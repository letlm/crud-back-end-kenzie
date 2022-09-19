import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const updateClientService = async (id: string, name: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id: id,
  });

  if (!client) {
    throw new AppError(404, "Client not found!");
  }

  const newName = name;

  await clientRepository.update(client!.id, {
    id: client!.id,
    name: newName,
    password: client!.password,
  });

  return true;
};

export default updateClientService;
