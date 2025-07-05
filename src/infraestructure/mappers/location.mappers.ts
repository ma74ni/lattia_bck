import { CustomError, LocationEntity } from "../../domain"

export class LocationMapper{
    static locationEntityFromObject(object:{[keyof: string]: any}){
        const{id, _id, name, address, active} = object

         const locationId = id || _id;
        if (!locationId) {
        throw CustomError.badRequest('Location id is required');
        }
        if (!name || typeof name !== 'string') {
        throw CustomError.badRequest('Location name is required');
        }
        if (!address || typeof address !== 'string') {
        throw CustomError.badRequest('Location address is required');
        }
        if (typeof active !== 'boolean') {
        throw CustomError.badRequest('Location active is required');
        }

        return new LocationEntity(locationId.toString(), name, address, active);
    }
}