import { Router } from "express";
import createClientController from "../controllers/client/createClient.controller";
import deleteClientController from "../controllers/client/deleteClient.controller";
import listClientsController from "../controllers/client/listClients.controller";
import listOneClientController from "../controllers/client/listOneClient.controller";
import updateClientController from "../controllers/client/updateClient.controller";
import createContactClientController from "../controllers/contact_client/createContactClient.controller";
import deleteContactClientController from "../controllers/contact_client/deleteContactClient.controller";
import listContactClientController from "../controllers/contact_client/listContactClientService";
import updateContactClientController from "../controllers/contact_client/updateContactClient.controller";

const routes = Router();

export const client = () => {
  routes.post("", createClientController);
  routes.get("", listClientsController);
  routes.get("/:id", listOneClientController);
  routes.patch("/:id", updateClientController);
  routes.delete("/:id", deleteClientController);
  routes.post("/contact", createContactClientController);
  routes.get("/:id/contact", listContactClientController);
  routes.patch("/:id/contact/:idContact", updateContactClientController);
  routes.delete("/:id/contact/:idContact", deleteContactClientController);

  return routes;
};
