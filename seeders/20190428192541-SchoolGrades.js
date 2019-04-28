'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("SchoolGrades", [
     { schoolID: 1, GradeId: 3 },
     { schoolID: 1, GradeId: 4 },
     { schoolID: 1, GradeId: 5 },
     { schoolID: 1, GradeId: 6 },
     { schoolID: 1, GradeId: 7 },
     { schoolID: 1, GradeId: 8 },
     { schoolID: 1, GradeId: 9 },
     { schoolID: 1, GradeId: 10 },
     { schoolID: 1, GradeId: 11 },
     { schoolID: 1, GradeId: 12 },
     { schoolID: 1, GradeId: 13 },
     { schoolID: 1, GradeId: 14 },
     { schoolID: 1, GradeId: 15 },
     { schoolID: 2, GradeId: 3 },
     { schoolID: 2, GradeId: 4 },
     { schoolID: 2, GradeId: 5 },
     { schoolID: 2, GradeId: 6 },
     { schoolID: 2, GradeId: 7 },
     { schoolID: 2, GradeId: 8 },
     { schoolID: 2, GradeId: 9 },
     { schoolID: 2, GradeId: 10 },
     { schoolID: 2, GradeId: 11 },
     { schoolID: 2, GradeId: 12 },
     { schoolID: 2, GradeId: 13 },
     { schoolID: 2, GradeId: 14 },
     { schoolID: 2, GradeId: 15 },
     { schoolID: 3, GradeId: 3 },
     { schoolID: 3, GradeId: 4 },
     { schoolID: 3, GradeId: 5 },
     { schoolID: 3, GradeId: 6 },
     { schoolID: 3, GradeId: 7 },
     { schoolID: 3, GradeId: 8 },
     { schoolID: 3, GradeId: 9 },
     { schoolID: 3, GradeId: 10 },
     { schoolID: 3, GradeId: 11 },
     { schoolID: 3, GradeId: 12 },
     { schoolID: 3, GradeId: 13 },
     { schoolID: 3, GradeId: 14 },
     { schoolID: 3, GradeId: 15 }
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
