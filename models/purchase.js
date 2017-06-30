module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    purchase_type: {
      type: DataTypes.STRING
    },
      purchase_price: {
        type: DataTypes.INTEGER
    },
    appt_time: {
      type: DataTypes.TIME
    },
    appt_date: {
      type: DataTypes.DATEONLY
    }
  });
return Purchase;
};
