import authenticationRoutes from "@main/routes/authentication-routes";
import commentRoutes from "@main/routes/comment-routes";
import foodRoutes from "@main/routes/food-routes";
import googleAuthRoutes from "@main/routes/googleAuth-routes";
import menuRoutes from "@main/routes/menu-routes";
import placeRoutes from "@main/routes/place-routes";
import postRoutes from "@main/routes/post-routes";
import resetPassRoutes from "@main/routes/reset-password-routes";

import { Express, Router } from "express";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  authenticationRoutes(router);
  resetPassRoutes(router);
  placeRoutes(router);
  postRoutes(router);
  commentRoutes(router);
  menuRoutes(router);
  foodRoutes(router);
  googleAuthRoutes(router);

};

