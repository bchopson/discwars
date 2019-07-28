'use strict'
module.exports = (sequelize, DataTypes) => {
  const Layout = sequelize.define('layout', {
    tee_color: DataTypes.STRING
  }, {})
  Layout.associate = function(models) {
    Layout.hasMany(models.Hole)
  }
  return Layout
}
