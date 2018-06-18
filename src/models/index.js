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
  Clusters: sequelize.import('./Clusters'),
  CommonIssues: sequelize.import('./CommonIssues'),
  CompanyDetails: sequelize.import('./CompanyDetails'),
  CompanyDirectContacts: sequelize.import('./CompanyDirectContacts'),
  DatabaseDetails: sequelize.import('./DatabaseDetails'),
  DayOfWeek: sequelize.import('./DayOfWeek'),
  ExternalSupportHours: sequelize.import('./ExternalSupportHours'),
  InternalSupportHours: sequelize.import('./InternalSupportHours'),
  IPAddress: sequelize.import('./IPAddress'),
  Location: sequelize.import('./Location'),
  OperatingSystem: sequelize.import('./OperatingSystem'),
  RequiredServices: sequelize.import('./RequiredServices'),
  Servers: sequelize.import('./Servers'),
  SqlInstance: sequelize.import('./SqlInstance'),
  Status: sequelize.import('./Status'),
  SystemAlias: sequelize.import('./SystemAlias'),
  SystemDependencies: sequelize.import('./SystemDependencies'),
  SystemDetails: sequelize.import('./SystemDetails'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
