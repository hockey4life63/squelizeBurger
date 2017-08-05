module.exports = function(sequelize, DataTypes) {
  var User= sequelize.define("User", {
    username:{
      type: DataTypes.STRING,
      validate:{
        len:[1, 140]
      }
    },
    burgers_ate: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return User;
};
