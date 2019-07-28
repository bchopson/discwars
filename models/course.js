'use strict'
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('course', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {})
  Course.associate = function(models) {
    Course.hasMany(models.Layout)
  }
  return Course
}
