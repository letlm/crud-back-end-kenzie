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
import schemaValidation from "../middlewares/schemaValidation";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyClientOwnerMiddleware from "../middlewares/verifyClientOwner.middleware";
import verifyEmailOrPhoneAvailabilityMiddleware from "../middlewares/verifyEmailOrPhoneAvailability.middleware";
import createClientSchema from "../schemas/client.schema";
import createContactSchema from "../schemas/contact.schema";

const routes = Router();

export const client = () => {
  routes.post(
    "",
    schemaValidation(createClientSchema),
    verifyEmailOrPhoneAvailabilityMiddleware,
    createClientController
  );
  routes.get("", verifyAuthTokenMiddleware, listClientsController);
  routes.get(
    "/:id",
    verifyAuthTokenMiddleware,

    listOneClientController
  );
  routes.patch(
    "/:id",
    verifyAuthTokenMiddleware,
    verifyClientOwnerMiddleware,
    updateClientController
  );
  routes.delete(
    "/:id",
    verifyAuthTokenMiddleware,
    verifyClientOwnerMiddleware,
    deleteClientController
  );
  routes.post(
    "/contact",
    schemaValidation(createContactSchema),
    verifyAuthTokenMiddleware,
    verifyClientOwnerMiddleware,
    verifyEmailOrPhoneAvailabilityMiddleware,
    createContactClientController
  );
  routes.get(
    "/:id/contact",
    verifyAuthTokenMiddleware,
    listContactClientController
  );
  routes.patch(
    "/:id/contact/:idContact",
    verifyAuthTokenMiddleware,
    verifyClientOwnerMiddleware,
    verifyEmailOrPhoneAvailabilityMiddleware,
    updateContactClientController
  );
  routes.delete(
    "/:id/contact/:idContact",
    verifyAuthTokenMiddleware,
    verifyClientOwnerMiddleware,
    deleteContactClientController
  );

  return routes;
};
