module.exports = (sequelize, DataTypes) => {
    var Schoolinfo = sequelize.define(
      "Schoolinfo",
      {
        school_id: {
          type: DataTypes.STRING(10),
          allowNull: false
        },
        school_name: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        school_type: { type: DataTypes.STRING(20) },
        logo: { type: DataTypes.STRING(100) },
        address: { type: DataTypes.STRING(50) },
        city: { type: DataTypes.STRING(30) },
        state: { type: DataTypes.STRING(10) },
        zipcode: { type: DataTypes.STRING(10) },
        borough: { type: DataTypes.STRING(20) },
        phone: { type: DataTypes.STRING(15) },
        email: { type: DataTypes.STRING(50) },
        description: { type: DataTypes.TEXT },
        tuition: { type: DataTypes.STRING },
        website: { type: DataTypes.STRING(50) }
      },
      { tableName: "Schoolinfo" },
    );

    Schoolinfo.associate = (models) => {
        Schoolinfo.hasMany(models.Events, {
            onDelete: "cascade",
            foreignKey: 'school_id'
        });
    }
    
    Schoolinfo.associate = function(models){
        Schoolinfo.belongsToMany(models.Grades, 
            { through: models.SchoolGrades,
              foreignKey: "schoolID",
            });
    }
    
    return Schoolinfo;
};

