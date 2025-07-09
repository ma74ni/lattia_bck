import { FlavorModel } from "../../data/mongodb";
import { CreateFlavorDto, CustomError, FlavorDatasource, FlavorEntity } from "../../domain";
import { FlavorMapper } from "../mappers/flavor.mappers";


export class FlavorDatasourceImpl implements FlavorDatasource{
    async createFlavor(createFlavorDto: CreateFlavorDto): Promise<FlavorEntity> {
        const {name, base, sugarFree, availableAt} = createFlavorDto
        try {
            const nameExist = await FlavorModel.findOne({name: name})
            if(nameExist){
                throw CustomError.badRequest('Flavor name already exists')
            }
            const flavor = await FlavorModel.create({
                name: name,
                base: base,
                sugarFree: sugarFree,
                availableAt: availableAt
            })
            await flavor.save()
            return FlavorMapper.flavorEntityFromObject(flavor)
        } catch (error) {
             if(error instanceof CustomError){
                throw error
            }
            console.error('Unexpected error creating flavor:', error); 
            throw CustomError.internalServer()
        }
    }
}