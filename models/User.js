const bcrypt = require('bcrypt');
const saltRounds = 12;



module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define(
      "User",
      {
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
          validate: { isEmail: true, min: [3], isLowercase: true }
        },
        password: {
          type: DataTypes.STRING(100)
        }
      },
      {
        hooks: {
          beforeSave: (user , options) => {
                console.log("Hashing Password");
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, saltRounds) :  "";
        }
      }
      });

      User.prototype.comparePassword = function(password) {
        bcrypt.compare(password, this.password, function(res, err) {
          if (res) {
            console.log(res);
          } else {
            console.log(err);
          }
        });
        return bcrypt.compare(password, this.password);
      };
    return User;
};
    
