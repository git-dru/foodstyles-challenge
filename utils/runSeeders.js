const { db } = require("../lib/db");

const dietSeeder = require("../seeders/dietSeeder");
const dishTypeSeeder = require("../seeders/dishTypeSeeder");
const brandSeeder = require("../seeders/brandSeeder");
const citySeeder = require("../seeders/citySeeder");

async function sync() {
  await db.sequelize.sync({ force: true });
  await dietSeeder(db.Diet);
  await dishTypeSeeder(db.DishType);
  await brandSeeder(db.Brand);
  await citySeeder(db.City);
  process.exit();
}

sync()