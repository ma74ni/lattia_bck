import { CreateBaseTypeDto } from "../dtos/baseType/create-baseType.dto";
import { BaseTypeEntity } from "../entities/baseType.entities";

export abstract class BaseTypeRepository{
    abstract createBaseType(createBaseTypeDto: CreateBaseTypeDto): Promise<BaseTypeEntity>
}