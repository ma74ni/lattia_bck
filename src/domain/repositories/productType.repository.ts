import { CreateProductTypeDto } from '../dtos/productType/create-productType.dto';
import { ProductTypeEntity } from '../entities/productType.entities';

export abstract class ProductTypeRepository {
  abstract createProductType(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<ProductTypeEntity>;
  abstract findAll(): Promise<ProductTypeEntity[]>;
}
