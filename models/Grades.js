module.exports = (sequelize, DataTypes) => {
    var Grades = sequelize.define("Grades", {
        grade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        },
        
    });
    
    Grades.associate = function (models) {
        Grades.belongsToMany(models.Schoolinfo, 
            {through: models.SchoolGrades,
                foreignKey: "GradeId",
            });
    }
    
    return Grades;
    
    
}