import { MySqlDatabase } from './mysql-database';
import { BaseTypeModel } from './models/baseType.model';
import { Models } from './models';

export const initMySQLModels = () => {
  const sequelize = MySqlDatabase.sequelize;
  if (!sequelize) throw new Error('Sequelize no inicializado');

  Models.BaseType = BaseTypeModel(sequelize);
  
};
