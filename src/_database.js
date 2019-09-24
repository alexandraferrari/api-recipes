const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.host,
  database: process.env.database,
  username: process.env.user,
  password: process.env.password,
  port: process.env.port_db,
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize

// Test DB Conenction //
async function test(){
  try{
      let result = await sequelize.authenticate()
      console.log("Sequelize realizou a conexão com o banco de dados com sucesso!")
  }
  catch(error){
      console.error("Houve um erro ao conectar com o banco de dados:")
      console.error(error)
      process.exit()
  }
}

test()
