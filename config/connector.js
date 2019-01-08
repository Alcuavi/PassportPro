const Sequelize = require('sequelize');

let sequelize = new Sequelize('passport', 'root', 'mysql', {
    host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
        max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
    }
});

module.exports = sequelize;