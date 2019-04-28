'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Grades", [
      {grade: "N",name: "Nursery"},
      {grade: "Pre-k",name: "Pre-k"},
      {grade: "K", name: "Kindergarten"},
      {grade: "1", name: "First Grade"},
      {grade: "2", name:	"Second Grade"},
      {grade: "3", name: "Third Grade"},
      {grade: "4", name:"Fourth Grade"},
      {grade:"5",	name:"Fifth Grade"},
      {grade:"6",	name:"Sixth Grade"},
      {grade:"7",	name:"Seventh Grade"},
      {grade:"8",	name:"Eight Grade"},
      {grade:"9",	name:"Ninth Grade"},
      {grade:"10",	name:"Tenth Grade"},
      {grade:"11",	name:"Eleventh Grade"},
      {grade:"12",	name:"Twelfth Grade"},
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
