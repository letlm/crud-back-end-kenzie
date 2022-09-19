import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const listContactClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const findAccount = await clientRepository.findOneBy({
    id: id,
  });

  if (!findAccount) {
    throw new AppError(404, "Client not found!");
  }

  return findAccount;
};

export default listContactClientService;
