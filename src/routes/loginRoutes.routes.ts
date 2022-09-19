import { Router } from "express";

import loginController from "../controllers/login.controller";

const routes = Router();

export const login = () => {
  routes.post("", loginController);

  return routes;
};
