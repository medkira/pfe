import { GetLatestPlacesRepository } from "@application/interfaces/repositories/place/GetLatestPlacesRepository";
import { GetLatesPlacesInterface } from "@application/interfaces/use-cases/places/GetlatestPlacesInterface";

export class GetLatesPlaces implements GetLatesPlacesInterface {
    constructor(
        private readonly getLatesrPlacesRepository: GetLatestPlacesRepository
    ) { }
    async execute(params: GetLatesPlacesInterface.Request): Promise<GetLatesPlacesInterface.Response> {
        const { page = 1, type, location } = params;
        const paginationLimit = 5;

        return this.getLatesrPlacesRepository.getLatestPlaces({
            page, paginationLimit,
            query: {
                ...type && { type },
                ...location && { location }

                // ...(type ? { type } : {}),
                // ...(location ? { location } : {})
            }
        });


    }

}