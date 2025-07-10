import { Router } from 'express';
import { LocationRoutes } from './locations/routes';
import { BaseTypeRoutes } from './baseType/routes';
import { ProductTypeRoutes } from './productType/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/location', LocationRoutes.routes);
    router.use('/api/base_type', BaseTypeRoutes.routes);
    router.use('/api/product_type', ProductTypeRoutes.routes);

    return router;
  }
}
