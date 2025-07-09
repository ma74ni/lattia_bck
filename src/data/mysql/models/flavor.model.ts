import { DataTypes } from 'sequelize';
import { MySqlDatabase } from '../mysql-database'; // ajusta el path según tu estructura

export const FlavorModel = MySqlDatabase.sequelize.define('Flavor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sugarFree: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  baseId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  locationId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  tableName: 'flavor',
  timestamps: false,
});
