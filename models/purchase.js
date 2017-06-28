module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    purchase_type: {
      type: DataTypes.STRING
    },
      purchase_price: {
        type: DataTypes.DATEONLY
    },
    appt_time: {
      type: DataTypes.STRING
    }
  });
return Purchase;
};
