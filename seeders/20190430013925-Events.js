'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Events", [
      {
        school_id: "1",
        event: "open house",
        date: new Date(),
        SchoolinfoId: "1"
      },
      {
        school_id: "2",
        event: "open house",
        date: new Date(),
        SchoolinfoId: "2"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
