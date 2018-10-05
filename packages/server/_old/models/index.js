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
  Clusters: sequelize.import('./Clusters'),
  CommonIssues: sequelize.import('./CommonIssues'),
  CompanyDirectContacts: sequelize.import('./CompanyDirectContacts'),
  DatabaseDetails: sequelize.import('./DatabaseDetails'),
  ExternalSupportHours: sequelize.import('./ExternalSupportHours'),
  InternalSupportHours: sequelize.import('./InternalSupportHours'),
  IPAddress: sequelize.import('./IPAddress'),
  RequiredServices: sequelize.import('./RequiredServices'),
  Servers: sequelize.import('./Servers'),
  SqlInstance: sequelize.import('./SqlInstance'),
  SystemAlias: sequelize.import('./SystemAlias'),
  SystemDependencies: sequelize.import('./SystemDependencies'),
  SystemDetails: sequelize.import('./SystemDetails')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
