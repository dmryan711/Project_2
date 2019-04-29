'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Schoolinfo", [
      {
        school_id: 1,
        school_name: "Dwight School ",
        school_type: "Private",
        address: "18 W 89th Street",
        city: "New York",
        state: "NY",
        zipcode: "10024",
        borough: "Manhattan",
        phone: "(212) 724-6360",
        email: "admissions@dwight.edu",
        description:
          "Founded in 1872, Dwight School is an internationally renowned independent school (nursery-grade 12) committed to educating the next generation of innovative global leaders — one student at a time. Providing a personalized experience for each student through the academically rigorous International Baccalaureate (IB) curriculum, Dwight is dedicated to “igniting the spark of genius” in every child. Dwight School has been recognized by the IB organization as a world leader in international education.",
        tuition: "46900",
        website: "https://www.dwight.edu"
      },
      {
        school_id: 2,
        school_name: "Collegiate School",
        school_type: "Privte",
        address: "260 W 78th Street",
        city: "New York",
        state: "NY",
        zipcode: "10024",
        borough: "Manhattan",
        phone: "(212) 812-8521",
        email: "admissions@collegiateschool.org",
        description:
          "Collegiate is divided into Lower School (Kindergarten-Grade 4), Middle School (Grades 5-8), and Upper School (Grades 9-12). Each division has its own administrative head and core faculty. Many faculty members teach in more than one division of the school. The students and faculty enjoy the advantages of a small-school environment while benefiting from the stimulation a college preparatory school can provide. The atmosphere at Collegiate is shaped by the close interaction of the student body and a sense of community within the school.",
        tuition: "51900",
        website: "https://www.collegiateschool.org"
      },
      {
      school_id: 3,
        school_name: "Dalton School",
        school_type: "Privte",
        address: "108 E 89th Street",
        city: "New York",
        state: "NY",
        zipcode: "10128",
        borough: "Manhattan",
        phone: "(212) 423-5450",
        email: "admissions@daltonschool.org",
        description:
          "The Dalton School is committed to providing an education of excellencethat meets each student’s interests, abilities and needs within a common curricular framework and reflects and promotes an understanding of, and appreciation for, diversity in our community as an integral part of school life. Dalton challenges each student to develop intellectual independence, creativity and curiosity and a sense of responsibility toward others both within the School and in the community at large. Guided by the Dalton Plan, the School prepares students to “Go Forth Unafraid.",
        tuition: "51350",
        website: "https://www.dalton.org"
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
