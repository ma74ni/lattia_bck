import { CreateProductTypeDto } from '../../dtos/productType/create-productType.dto';
import { ProductTypeRepository } from '../../repositories/productType.repository';

interface CreateProductTypeResponse {
  productType: {
    id: string;
    name: string;
  };
}

interface CreateProductTypeUseCase {
  execute(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<CreateProductTypeResponse>;
}

export class CreateProductType implements CreateProductTypeUseCase {
  constructor(private readonly productTypeRepository: ProductTypeRepository) {}
  async execute(
    createProductTypeDto: CreateProductTypeDto
  ): Promise<CreateProductTypeResponse> {
    const productType = await this.productTypeRepository.createProductType(
      createProductTypeDto
    );

    return {
      productType: {
        id: productType.id,
        name: productType.name,
      },
    };
  }
}
