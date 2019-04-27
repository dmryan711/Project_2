module.exports = (sequelize, DataTypes) => {
    var SchoolGrades  = sequelize.define("SchoolGrade", {
        schoolID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        GradeId: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    return SchoolGrades;

    Schoolinfo.belongsToMany(Grades, { through: SchoolGrades });
    Grades.belongsToMany(Schoolinfo, { through: SchoolGrades });

}