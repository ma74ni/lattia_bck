import { Router } from 'express';
import {
  ProductTypeDatasourceImpl,
  ProductTypeRepositoryImpl,
} from '../../infraestructure';
import { ProductTypeController } from './controllers';

export class ProductTypeRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new ProductTypeDatasourceImpl();
    const produtTypeRepository = new ProductTypeRepositoryImpl(datasource);
    const controller = new ProductTypeController(produtTypeRepository);

    router.post('/create', (req, res) => {
      controller.createProductType(req, res);
    });
    router.get('/', (req, res) => {
      controller.listProductType(req, res);
    });

    return router;
  }
}
