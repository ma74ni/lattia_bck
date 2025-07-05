import { CreateLocationDto, LocationDatasource, LocationEntity, LocationRepository } from "../../domain";

export class LocationRepositoryImpl implements LocationRepository{
    constructor(
        private readonly locationDatasource: LocationDatasource
    ){}

    createLocation(createLocationDto: CreateLocationDto): Promise<LocationEntity>{
        return this.locationDatasource.createLocation(createLocationDto)
    }
}