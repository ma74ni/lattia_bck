import { MySqlDatabase } from './mysql-database';
import { BaseTypeModel, initBaseTypeModel  } from './models/baseType.model';

export const Models = {
  BaseType: BaseTypeModel
};


export const initMySQLModels = () => {
  const sequelize = MySqlDatabase.sequelize;
  if (!sequelize) throw new Error('Sequelize no inicializado');

  initBaseTypeModel(sequelize); 
  
};
