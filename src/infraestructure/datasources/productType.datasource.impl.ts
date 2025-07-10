import { ProductTypeModel } from '../../data/mysql/models/productType.model';
import {
  CreateProductTypeDto,
  CustomError,
  ProductTypeEntity,
} from '../../domain';
import { ProductTypeMapper } from '../mappers/productType.mappers';

export class ProductTypeDatasourceImpl implements ProductTypeDatasourceImpl {
  constructor() {}

  async createProductType(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<ProductTypeEntity> {
    const { name } = createProductTypeDto;

    try {
      const nameExist = await ProductTypeModel.findOne({ where: { name } });
      if (nameExist) {
        throw CustomError.badRequest('Product Type name already exists');
      }
      const productType = await ProductTypeModel.create({ name });
      return ProductTypeMapper.productTypeEntityFromObject(productType!);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.error('Unexpected error creating product type:', error);
      throw CustomError.internalServer();
    }
  }
  async findAll(): Promise<ProductTypeEntity[]> {
    try {
      const baseTypes = await ProductTypeModel.findAll();
      return baseTypes.map(ProductTypeMapper.productTypeEntityFromObject);
    } catch (error) {
      console.error('Unexpected error retrieving product types:', error);
      throw CustomError.internalServer();
    }
  }
}
