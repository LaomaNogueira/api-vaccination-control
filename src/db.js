const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

database.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(() => console.error('Unable to connect to the database'));

module.exports = { database };