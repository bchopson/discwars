'use strict'
module.exports = (sequelize, DataTypes) => {
  const Hole = sequelize.define('hole', {
    number: DataTypes.INTEGER,
    par: DataTypes.INTEGER,
    distance: DataTypes.DECIMAL,
  }, {})
  return Hole
}
