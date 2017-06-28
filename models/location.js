module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    street: {
      type: DataTypes.STRING
    },
      apt_num: {
        type: DataTypes.DATEONLY
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    }
  });
return Location;
};
