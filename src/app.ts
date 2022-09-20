import express from "express";
import "reflect-metadata";
import { appRoutes } from "./routes";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
appRoutes(app);

app.use(handleErrorMiddleware);
app.listen(process.env.PORT || 5000);

export default app;
