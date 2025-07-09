import { CreateBaseTypeDto } from "../../dtos/baseType/create-baseType.dto";
import { BaseTypeRepository } from "../../repositories/baseType.repository";

interface CreateBaseTypeResponse {
  baseType: {
    id: string;
    name: string;
  };
}

interface CreateBaseTypeUseCase{
    execute(createBaseTypeDto: CreateBaseTypeDto): Promise<CreateBaseTypeResponse>
}

export class CreateBaseType implements CreateBaseTypeUseCase{

    constructor(
        private readonly baseTypeRepository: BaseTypeRepository
    ){}

    async execute(createBaseTypeDto: CreateBaseTypeDto): Promise<CreateBaseTypeResponse> {
        const baseType = await this.baseTypeRepository.createBaseType(createBaseTypeDto)

        return{
            baseType: {
                id: baseType.id,
                name: baseType.name
            }
        }
    }

}