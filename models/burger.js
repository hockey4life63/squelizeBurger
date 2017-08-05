module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger2", {
    burger_name:{
      type: DataTypes.STRING,
      validate:{
        len:[1, 140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    eaten_by:{
      type: DataTypes.STRING    
    }
  });
  return Burger;
};
