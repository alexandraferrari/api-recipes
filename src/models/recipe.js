const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Recipe = sequelize.define('recipe', {
  title: {
    type: Sequelize.STRING
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  preparation_mode: {
    type: Sequelize.TEXT
  },
}, { 
      freezeTableName: true // disable automatic plural table name
})

module.exports = Recipe