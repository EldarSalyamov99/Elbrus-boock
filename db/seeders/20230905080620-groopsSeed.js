'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});   Орлы, Совы, Пчёлы, Медведи, Еноты, Лисы, Волки, Бобры или Ежи
    */
    await queryInterface.bulkInsert('Groups', [
      {
      group: 'Орлы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Совы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Пчёлы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Медведи',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Еноты',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Лисы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Волки',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Бобры',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group: 'Ежи',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
