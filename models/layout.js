'use strict'
module.exports = (sequelize, DataTypes) => {
  const Layout = sequelize.define('Layout', {
    tee_color: DataTypes.STRING
  }, {})
  Layout.associate = function(models) {
    // associations can be defined here
    Layout.hasMany(models.Hole)
  }
  return Layout
}
