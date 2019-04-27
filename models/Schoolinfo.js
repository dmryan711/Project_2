module.exports = (sequelize, DataTypes) => {
    var Schoolinfo = sequelize.define("Schoolinfo", {
        school_id: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        school_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        school_type: {
            type: DataTypes.STRING(20),
        },
        logo: {
            type: DataTypes.STRING(100),
        },
        address: {
            type: DataTypes.STRING(50),
            
        },
        city: {
            type: DataTypes.STRING(30),

        },
        state: {
            type: DataTypes.STRING(10),

        },
        zipcode: {
            type: DataTypes.STRING(10),

        },
        phone: {
            type: DataTypes.STRING(15),

        },
        email: {
            type: DataTypes.STRING(50),

        },
        description: {
            type: DataTypes.TEXT,

        },
        tuition: {
            type: DataTypes.INTEGER,

        },
        website: {
            type: DataTypes.STRING(50),

        }

    });

    Schoolinfo.associate = (models) => {
        Schoolinfo.hasMany(models.Events, {
            onDelete: "cascade"
        });
    }
    return Schoolinfo;
};

