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
  Clusters: sequelize.import('./clusters'),
  Company: sequelize.import('./company'),
  CommonIssues: sequelize.import('./commonIssues'),
  CompanyDirectContacts: sequelize.import('./companyDirectContacts'),
  DatabaseDetails: sequelize.import('./catabaseDetails'),
  DayOfWeek: sequelize.import('./dayOfWeek'),
  ExternalSupportHours: sequelize.import('./externalSupportHours'),
  InternalSupportHours: sequelize.import('./internalSupportHours'),
  IPAddress: sequelize.import('./ipAddress'),
  Location: sequelize.import('./location'),
  OperatingSystem: sequelize.import('./operatingSystem'),
  RequiredServices: sequelize.import('./requiredServices'),
  Servers: sequelize.import('./servers'),
  SqlInstance: sequelize.import('./sqlInstance'),
  Status: sequelize.import('./status'),
  SystemAlias: sequelize.import('./systemAlias'),
  SystemDependencies: sequelize.import('./systemDependencies'),
  SystemDetails: sequelize.import('./systemDetails')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
