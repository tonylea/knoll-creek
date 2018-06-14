import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  host: process.env.DB_INSTANCE,
  dialect: process.env.DB_DIALECT,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const models = {
  Channel: sequelize.import('./Channel'),
  Message: sequelize.import('./Message'),
  Team: sequelize.import('./Team'),
  User: sequelize.import('./User'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
