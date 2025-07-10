import { MySqlDatabase } from './mysql-database';
import { BaseTypeModel, initBaseTypeModel } from './models/baseType.model';
import {
  initProductTypeModel,
  ProductTypeModel,
} from './models/productType.model';

export const Models = {
  BaseType: BaseTypeModel,
  ProductType: ProductTypeModel,
};

export const initMySQLModels = () => {
  const sequelize = MySqlDatabase.sequelize;
  if (!sequelize) throw new Error('Sequelize no inicializado');

  initBaseTypeModel(sequelize);
  initProductTypeModel(sequelize);
};
