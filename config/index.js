const dotEnv = require("dotenv");

dotEnv.config();

module.exports = {
  "PORT": process.env.PORT,

  "DB_DATABASE": process.env.DB_DATABASE,
  "DB_USER": process.env.DB_USER,
  "DB_PASSWORD": process.env.DB_PASSWORD,
  "DB_HOST": process.env.DB_HOST,
  "DB_PORT": process.env.DB_PORT,
}
