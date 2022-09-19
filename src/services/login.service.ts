import jwt from "jsonwebtoken";
import { ILogin } from "../interfaces/index";
import * as bcrypt from "bcryptjs";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../errors/appError";
import { ContactClient } from "../entities/contactClient.entity";

const loginService = async ({ name, password }: ILogin) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      name: name,
    },
  });

  if (!findClient) {
    throw new AppError(400, "Wrong email/password!");
  }

  const passwordMatch = bcrypt.compareSync(password, findClient.password);

  if (!passwordMatch) {
    throw new AppError(400, "Wrong email/password!");
  }

  const contactClientRepository = AppDataSource.getRepository(ContactClient);

  const infoClient = await contactClientRepository.findOneBy({
    client: findClient,
  });

  const token = jwt.sign(
    {
      id: findClient!.id,
      email: infoClient?.email,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default loginService;
