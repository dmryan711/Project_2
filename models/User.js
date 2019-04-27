module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false 
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            validate: {isEmail: true,
                min: [3],
                isLowercase: true, 
            }
        },
        password: {
            type: DataTypes.STRING(50),
            //TODO: Encrypt Password here
        }
    });
    return User;
};
    
