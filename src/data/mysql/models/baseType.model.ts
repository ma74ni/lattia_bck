import { DataTypes, Sequelize, Model } from 'sequelize';

export interface BaseTypeAttibutes{
  id: number;
  name: string;
}

export interface BaseTypeCreationAttibutes{
  name: string;
}

export class BaseTypeModel extends Model<BaseTypeAttibutes, BaseTypeCreationAttibutes> implements BaseTypeAttibutes{
  declare id: number;
  declare name: string;
}

export const initBaseTypeModel = (sequelize: Sequelize) => {
  BaseTypeModel.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
    }, {
       sequelize,
      tableName: 'basetype',
      timestamps: false,
  })
}