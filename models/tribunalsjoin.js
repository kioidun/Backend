'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TribunalsJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TribunalsJoin.init({
    tribunalsId: DataTypes.INTEGER,
    tribunalsServicesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TribunalsJoin',
  });
  return TribunalsJoin;
};