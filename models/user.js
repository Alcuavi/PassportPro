const Connector = require('../config/connector');
const Sequelize = require('sequelize');

const User = CONNECTOR.define('users', {
    username: {
        type: Sequelize.STRING
    },
    pass: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;