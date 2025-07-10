import { BaseTypeDatasource, BaseTypeEntity, BaseTypeRepository, CreateBaseTypeDto } from "../../domain";

export class BaseTypeRepositoryImpl implements BaseTypeRepository{
    constructor(
        private readonly baseTypeDatasource: BaseTypeDatasource
    ){}

    createBaseType(createBaseTypeDto: CreateBaseTypeDto): Promise<BaseTypeEntity>{
        return this.baseTypeDatasource.createBaseType(createBaseTypeDto)
    }
    findAll(): Promise<BaseTypeEntity[]>{
        return this.baseTypeDatasource.findAll()
    }

}