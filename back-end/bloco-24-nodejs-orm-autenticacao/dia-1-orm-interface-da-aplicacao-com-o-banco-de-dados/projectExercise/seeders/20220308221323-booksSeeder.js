'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('BooksModels',
    [
      {
        title: 'Harry Potter',
        author: 'James',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Senhor dos Aneis',
        author: 'R FF',
        pageQuantity: 352,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('BooksModels', null, {}),

};
