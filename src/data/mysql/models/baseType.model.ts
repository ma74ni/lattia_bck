import { DataTypes, Sequelize } from 'sequelize';

export const BaseTypeModel = (sequelize: Sequelize) => {
  return sequelize.define('BaseType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    tableName: 'basetype',
  timestamps: false,
  })
}
