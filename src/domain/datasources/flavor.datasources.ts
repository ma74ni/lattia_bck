import { CreateFlavorDto } from "../dtos/flavor/create-flavor.dto";
import { FlavorEntity } from "../entities/flavor.entities";

export abstract class FlavorDatasource{
    abstract createFlavor(createFlavorDto: CreateFlavorDto): Promise<FlavorEntity>
}