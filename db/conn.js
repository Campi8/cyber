const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cybersafezon', 'anakamy', 'cybersafezon', {
  host: 'db4free.net',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize