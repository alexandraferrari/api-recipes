const sequelize = require('../_database')

const models = {
  recipe: require('./recipe'),
  sequelize: sequelize
}

module.exports = models