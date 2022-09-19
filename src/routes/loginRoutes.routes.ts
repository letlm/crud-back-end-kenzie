import { Router } from "express";

import loginController from "../controllers/loginService.controller";

const routes = Router();

export const login = () => {
  routes.post("", loginController);

  return routes;
};
