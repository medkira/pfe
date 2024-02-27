import { Validation } from "@infra/http/validation/interface/Validation";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { ok, notFound } from "@infra/http/helpers/https";
import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { Food, FoodProps } from "@domain/entities/Food";

export class CreateMenuController extends BaseController {
  constructor(
    private readonly createMenuValidation: Validation,
    private readonly getPlaceById: GetPlaceByIdInterface,
    private readonly createMenu: CreateMenuInterface,
    private readonly createFoodInterface: CreateFoodInterface
  ) {
    super(createMenuValidation);
  }

  async execute(
    httpRequest: CreateMenuController.Request
  ): Promise<CreateMenuController.Response> {
    const { place_id, foods } = httpRequest.body!;

    const placeOrError = await this.getPlaceById.execute({ id: place_id });
    if (placeOrError instanceof PlaceNotFoundError) {
      return notFound(placeOrError);
    }
    let food_ids: string[] = [];
    foods.forEach(async (food) => {
      let food_id = await this.createFoodInterface.execute(food);
      food_ids.push(food_id);
    });

    const id = await this.createMenu.execute({ place_id, food_ids });

    return ok({ id });
  }
}

export namespace CreateMenuController {
  export type Request = HttpRequest<{
    place_id: string;
    foods: Pick<FoodProps, "name" | "price">[];
  }>;
  export type Response = HttpResponse<
    { MenuId: string } | PlaceNotFoundError | FoodNotFoundError
  >;
}