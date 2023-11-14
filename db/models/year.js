

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Year extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.hasMany(User, {
        foreignKey: 'yearId'
      })
    }
  }
  Year.init({
    year: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Year',
  });
  return Year;
};