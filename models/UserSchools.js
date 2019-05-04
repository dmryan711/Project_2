module.exports = (sequelize, DataTypes) => {
    var UserSchools = sequelize.define("UserSchools", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      schoolId: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return UserSchools;
}
