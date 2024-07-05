const ErrorHandler = require("../middleware/errorHandleMiddleware");
const SearchService = require("../services/searchService");

const errorHandler = new ErrorHandler();
const searchService = new SearchService();

const search = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm;

    if (typeof searchTerm !== 'string') {
      throw new Error('Invalid search term');
    }

    const searchResult = await searchService.extractEntities(searchTerm);

    res.json(searchResult);
  } catch (err) {
    errorHandler.apiErrorHandler(err, res);
  }
}

module.exports = {
  search
}