import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    dialect: 'mssql',
    dialectModule: require('tedious'),
    dialectOptions: {
      options: {
        trustServerCertificate: true,
        rowCollectionOnRequestCompletion: true,
        requestTimeout: 1000,
      },
    },
    logging: false,
  },
);

export default sequelize;
