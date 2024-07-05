const { Sequelize } = require('@sequelize/core');
const { PostgresDialect } = require('@sequelize/postgres');

const BrandDef = require("../models/brandModel");
const CityDef = require("../models/cityModel");
const DietDef = require("../models/dietModel");
const DishTypeDef = require("../models/dishTypeModel");

const { 
  DB_DATABASE, 
  DB_USER, 
  DB_PASSWORD, 
  DB_HOST, 
  DB_PORT 
} = require("../config");

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  clientMinMessages: 'notice',
});

module.exports.db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Op: Sequelize.Op,
  Diet: DietDef(sequelize, Sequelize),
  DishType: DishTypeDef(sequelize, Sequelize),
  Brand: BrandDef(sequelize, Sequelize),
  City: CityDef(sequelize, Sequelize),
};
