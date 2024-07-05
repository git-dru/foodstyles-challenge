const ErrorHandler = require("../middleware/errorHandleMiddleware");
const prepositions = require("../constants/prepositions");
const { db } = require("../lib/db");

module.exports = class SearchService {
  constructor() {}
  errorHandler = new ErrorHandler();

  extractEntities = async (searchTerm) => {
    try {
      const searchTerms = searchTerm
        .split(" ")
        .filter((term) => !prepositions.includes(term))
        .map((term) => term.trim().replace(/'/g, "''"));

      const whereClauses = searchTerms
        .map((term) => `name ~* '\\y${term}\\y'`)
        .join(" OR ");

      const query = `
        SELECT 'brand' as entity, id, name FROM brands WHERE ${whereClauses}
        UNION ALL
        SELECT 'city' as entity, id, name FROM cities WHERE ${whereClauses}
        UNION ALL
        SELECT 'diet' as entity, id, name FROM diets WHERE ${whereClauses}
        UNION ALL
        SELECT 'dishType' as entity, id, name FROM "dishTypes" WHERE ${whereClauses}
      `;

      const [results] = await db.sequelize.query(query);

      const groupedData = results.reduce((accumulator, item) => {
        const { entity, ...rest } = item;
        if (!accumulator[entity]) {
          accumulator[entity] = [];
        }
        accumulator[entity].push(rest);
        return accumulator;
      }, {});
      let permutations = this.generatePermutations(groupedData);
      return permutations;
    } catch (error) {
      this.errorHandler.passthrough(error, "Service: extractEntities");
    }
  };

  generatePermutations = (data) => {
    const keys = Object.keys(data);
    const firstKey = keys[0];
    const restKeys = keys.slice(1);

    const permutations = [];

    const permute = (index, currentObject) => {
      if (index === restKeys.length) {
        permutations.push({ ...currentObject });
        return;
      }

      const key = restKeys[index];
      for (const value of data[key]) {
        currentObject[key] = value;
        permute(index + 1, currentObject);
      }
    };

    if (data.hasOwnProperty(firstKey)) {
      for (const value of data[firstKey]) {
        const currentObject = { [firstKey]: value };
        permute(0, currentObject);
      }
    }

    return permutations;
  };
}