

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment, Like }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'userId'
      })
      this.hasMany(Comment, {
        foreignKey: 'bookId'
      })
      this.hasMany(Like, {
        foreignKey: 'bookId'
      })
    }
  }
  Book.init({
    bookName: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};