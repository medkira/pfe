import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeCreateFoodController } from "@main/factories/controllers/food/create-food/controller-factory";
import { makeDeleteFoodController } from "@main/factories/controllers/food/delete-food/controller-factory";
import { makeGetFoodByIdController } from "@main/factories/controllers/food/get-food-by-id/controller-factory";
import { makeGetPlaceByFoodIdController } from "@main/factories/controllers/food/get-place-by-food-id/controller-factory";
import { makeUpdateFoodController } from "@main/factories/controllers/food/update-food/controller-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
  router.get(
    "/food/:id",

    expressRouterAdapter(makeGetFoodByIdController())
  );
  router.post(
    "/food",
    authMiddleware,
    expressRouterAdapter(makeCreateFoodController())
  );
  router.get(
    "/placeFromFood/:id",

    expressRouterAdapter(makeGetPlaceByFoodIdController())
  );
  router.delete(
    "/food/:id",
    authMiddleware,
    expressRouterAdapter(makeDeleteFoodController())
  );
  router.patch("/food/:id", authMiddleware,expressRouterAdapter(makeUpdateFoodController()));

};
