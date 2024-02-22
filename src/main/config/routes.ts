import authenticationRoutes from "@main/routes/authentication-routes";
import { Express, Router } from "express"

export const setupRoutes = (app: Express): void => {
    const router = Router();
    app.use('/api', router);

    // ? declare the server routes here
    authenticationRoutes(router);

}