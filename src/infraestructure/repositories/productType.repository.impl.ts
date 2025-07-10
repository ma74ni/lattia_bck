import {
  CreateProductTypeDto,
  ProductTypeEntity,
  ProductTypeRepository,
  ProdutTypeDatasource,
} from '../../domain';

export class ProductTypeRepositoryImpl implements ProductTypeRepository {
  constructor(private readonly productTypeDatasource: ProdutTypeDatasource) {}

  createProductType(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<ProductTypeEntity> {
    return this.productTypeDatasource.createProductType(createProductTypeDto);
  }
  findAll(): Promise<ProductTypeEntity[]> {
    return this.productTypeDatasource.findAll();
  }
}
