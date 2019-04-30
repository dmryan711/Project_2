module.exports = (sequelize, DataTypes) => {
    var Events = sequelize.define("Events", {
        school_id: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        event: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
        },
       
    });

    Events.associate = function(models){
        Events.belongsTo(models.Schoolinfo, {
            foreighKey: 'school_id'
        });



    };

    return Events;
};



//foreign key