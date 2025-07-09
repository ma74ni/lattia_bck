
import { Models } from "../../data/mysql/models";
import { BaseTypeDatasource, BaseTypeEntity, CreateBaseTypeDto, CustomError } from "../../domain";
import { BaseTypeMapper } from "../mappers/baseType.mappers";


export class BaseTypeDatasourceImpl implements BaseTypeDatasource{
    
    constructor(){}

    async createBaseType(createBaseTypeDto: CreateBaseTypeDto): Promise<BaseTypeEntity>{
        const {name} = createBaseTypeDto

        console.log('name', name)

        try{
            const nameExist = await Models.BaseType?.findOne({where: { name: name }})
            if(nameExist){
                throw CustomError.badRequest('Base Type name already exists')
            }
            const baseType = await Models.BaseType?.create({ name });
            return BaseTypeMapper.baseTypeEntityFromObject(baseType!)
        }catch(error){
            if(error instanceof CustomError){
                throw error
            }
            console.error('Unexpected error creating base type:', error); 
            throw CustomError.internalServer()
        }
    }

}