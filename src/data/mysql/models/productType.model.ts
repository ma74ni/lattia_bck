import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ProductTypeAttributes {
  id: number;
  name: string;
}

export interface ProductTypeCreatinAttribute {
  name: string;
}

export class ProductTypeModel
  extends Model<ProductTypeAttributes, ProductTypeCreatinAttribute>
  implements ProductTypeAttributes
{
  declare id: number;
  declare name: string;
}

export const initProductTypeModel = (sequelize: Sequelize) => {
  ProductTypeModel.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: 'producttype',
      timestamps: false,
    }
  );
};
