import { Request, Response } from 'express';
import {
  CreateProductType,
  CreateProductTypeDto,
  CustomError,
  ProductTypeRepository,
} from '../../domain';

export class ProductTypeController {
  constructor(private readonly productTypeRepository: ProductTypeRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.error('Unexpected error:', error);

    return res.status(500).json({ error: 'Internal Server Error' });
  };

  createProductType = (req: Request, res: Response) => {
    const [error, createProductTypeDto] = CreateProductTypeDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateProductType(this.productTypeRepository)
      .execute(createProductTypeDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  listProductType = (req: Request, res: Response) => {
    this.productTypeRepository
      .findAll()
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };
}
