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
    return Grades;

    
}