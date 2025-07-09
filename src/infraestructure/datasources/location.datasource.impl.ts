import { LocationModel } from "../../data/mongodb";
import { CreateLocationDto, CustomError, LocationDatasource, LocationEntity } from "../../domain";
import { LocationMapper } from "../mappers/location.mappers";

export class LocationDatasourceImpl implements LocationDatasource{

    constructor(){}
    
    async createLocation(createLocationDto: CreateLocationDto): Promise<LocationEntity>{
        const {name, address, active} = createLocationDto

        try{
            const nameExist = await LocationModel.findOne({name:name})
            if(nameExist){
                throw CustomError.badRequest('Location name already exists')
            }
            const location = await LocationModel.create({
                name: name,
                address: address,
                active: active
            })
            await location.save()
            return LocationMapper.locationEntityFromObject(location)

        }catch(error){
            if(error instanceof CustomError){
                throw error
            }
            console.error('Unexpected error creating location:', error); 
            throw CustomError.internalServer()
        }
    }
}