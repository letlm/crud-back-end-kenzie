import { Router } from "express";

import loginController from "../controllers/login.controller";
import schemaValidation from "../middlewares/schemaValidation";
import loginSchema from "../schemas/login.schema";

const routes = Router();

export const login = () => {
  routes.post("", schemaValidation(loginSchema), loginController);

  return routes;
};
