

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Group, Book, Comment, Year, Like }) {
      // define association here
      this.belongsTo(Group, {
        foreignKey: 'groupId'
      })
      this.hasMany(Comment, {
        foreignKey: 'userId'
      })
      this.belongsTo(Year, {
        foreignKey: 'yearId'
      })
      this.hasMany(Book, {
        foreignKey: 'userId'
      })
      this.hasMany(Like, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashpass: DataTypes.STRING,
    yearId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};