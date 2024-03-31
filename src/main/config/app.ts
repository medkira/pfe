import express, { Express } from "express";
import { setupSocket } from "./socket";
import { setupRoutes } from "./routes";
import { setupMiddleware } from "./middleware";
import bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";

export const setupApp = (): Express => {
  const app = express();

  app.use(cors());

  // ! change this
  app.set("view engine", "ejs");
  app.set("views", "C:/Users/User/Desktop/pfee/pfe/src/main/presentation/");

  // ? put anything that the express will use
  setupSocket(app);
  setupMiddleware(app);
  setupRoutes(app);

  return app;
};
