module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location", {
    street: {
      type: DataTypes.STRING
    },
      apt_num: {
        type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.INTEGER
    }
  });
return Location;
};
