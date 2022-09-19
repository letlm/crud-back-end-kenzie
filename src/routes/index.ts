import { Express } from "express";
import { login } from "./loginRoutes.routes";
import { client } from "./clientRoutes.routes";

export const appRoutes = (app: Express) => {
  app.use("/client", client());
  app.use("/login", login());
};
