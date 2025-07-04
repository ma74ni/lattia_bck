import { CreateLocationDto } from "../../dtos/location/create-location.dto";
import { LocationRepository } from "../../repositories/location.repository";

interface CreateLocationResponse {
  location: {
    id: string;
    name: string;
    address: string;
    active: boolean;
  };
}

interface CreateLocationUseCase{
    execute(createLocationDto: CreateLocationDto): Promise<CreateLocationResponse>
}
export class CreateLocation implements CreateLocationUseCase{
    constructor(
        private readonly locationRepository: LocationRepository
    ){}
    async execute(createLocationDto: CreateLocationDto): Promise<any> {
        const location = await this.locationRepository.createLocation(createLocationDto)

        return{
            location: {
                id: location.id,
                name: location.name,
                address: location.address,
                active: location.active
            }
        }
    }

}