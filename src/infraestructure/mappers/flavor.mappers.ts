import { CustomError, FlavorEntity } from "../../domain";

export class FlavorMapper{
    static flavorEntityFromObject(object: {[keyof: string]: any}){
        const{id, _id, name, base, sugarFree, availableAt} = object

        const flavorId = id || _id

        if(!flavorId){
            throw CustomError.badRequest('Flavor id is required');
        }
        if (!name || typeof name !== 'string') {
            throw CustomError.badRequest('Flavor name is required');
        }
        if (base !== 'agua' && base !== 'leche') {
            throw CustomError.badRequest('Base must be "agua" or "leche"');
        }
        if (!Array.isArray(availableAt)) {
            throw CustomError.badRequest('availableAt must be an array');
        }

        const locationIds = availableAt.map((id: any) => id.toString());

         return new FlavorEntity(
            flavorId.toString(),
            name,
            base,
            sugarFree,
            locationIds
        );
    }
}