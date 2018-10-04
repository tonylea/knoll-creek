import Sequelize from 'sequelize';

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_INSTANCE,
    dialect: process.env.DB_DIALECT,
    define: {
      underscored: true
    }
  }
);

const models = {
  Company: sequelize.import('./company'),
  DayOfWeek: sequelize.import('./dayOfWeek'),
  Location: sequelize.import('./location'),
  OperatingSystem: sequelize.import('./operatingSystem'),
  Status: sequelize.import('./status')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
