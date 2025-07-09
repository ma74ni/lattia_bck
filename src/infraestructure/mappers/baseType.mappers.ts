import { BaseTypeEntity, CustomError } from "../../domain";

export class BaseTypeMapper{
    static baseTypeEntityFromObject(object: {[keyof: string]: any}){
        const{id, name} = object

        if (!id) {
            throw CustomError.badRequest('Base Type id is required');
        }
        if (!name || typeof name !== 'string') {
            throw CustomError.badRequest('Base Type name is required');
        }

        return new BaseTypeEntity(id, name)
    }
}