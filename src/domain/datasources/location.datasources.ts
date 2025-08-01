import { CreateLocationDto } from "../dtos/location/create-location.dto";
import { LocationEntity } from "../entities/location.entities";

export abstract class LocationDatasource{
    abstract createLocation(createLocationDto: CreateLocationDto): Promise<LocationEntity>
}