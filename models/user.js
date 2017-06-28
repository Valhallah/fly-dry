module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING
    },
      birthdate: {
        type: DataTypes.DATEONLY
    },
    emial: {
      type: DataTypes.STRING
    },
      password: {
        type: DataTypes.STRING
      }
  });
return User;
};
