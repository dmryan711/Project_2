module.exports = (sequelize, DataTypes) => {
    var SchoolGrades  = sequelize.define("SchoolGrades", {
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
}