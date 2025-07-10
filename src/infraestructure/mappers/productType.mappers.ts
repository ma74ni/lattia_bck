import { CustomError, ProductTypeEntity } from '../../domain';

export class ProductTypeMapper {
  static productTypeEntityFromObject(object: { [keyof: string]: any }) {
    const { id, name } = object;

    if (!id) {
      throw CustomError.badRequest('Base Type id is required');
    }
    if (!name || typeof name !== 'string') {
      throw CustomError.badRequest('Base Type name is required');
    }

    return new ProductTypeEntity(id, name);
  }
}
