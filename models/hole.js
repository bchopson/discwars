'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hole = sequelize.define('Hole', {
    number: DataTypes.INTEGER,
    par: DataTypes.INTEGER,
    distance: DataTypes.DECIMAL
  }, {});
  Hole.associate = function(models) {
    // associations can be defined here
  };
  return Hole;
};
