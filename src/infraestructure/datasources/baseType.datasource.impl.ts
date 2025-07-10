
import { BaseTypeModel } from "../../data/mysql/models/baseType.model";
import { BaseTypeDatasource, BaseTypeEntity, CreateBaseTypeDto, CustomError } from "../../domain";
import { BaseTypeMapper } from "../mappers/baseType.mappers";


export class BaseTypeDatasourceImpl implements BaseTypeDatasource{
    
    constructor(){}

    async createBaseType(createBaseTypeDto: CreateBaseTypeDto): Promise<BaseTypeEntity>{
        const {name} = createBaseTypeDto

        try{
            const nameExist = await BaseTypeModel.findOne({ where: { name } });
            if(nameExist){
                throw CustomError.badRequest('Base Type name already exists')
            }
            const baseType = await BaseTypeModel.create({ name });
            return BaseTypeMapper.baseTypeEntityFromObject(baseType!)
        }catch(error){
            if(error instanceof CustomError){
                throw error
            }
            console.error('Unexpected error creating base type:', error); 
            throw CustomError.internalServer()
        }
    }
    async findAll(): Promise<BaseTypeEntity[]> {
        try {
            const baseTypes = await BaseTypeModel.findAll();
        return baseTypes.map(BaseTypeMapper.baseTypeEntityFromObject);
        } catch (error) {
            console.error('Unexpected error retrieving base types:', error);
            throw CustomError.internalServer();
        }
    }

}