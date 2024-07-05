const express = require("express");
const cors = require("cors");

const { PORT } = require("./config");
const ErrorHandler = require("./middleware/errorHandleMiddleware");
const router = require('./routes');

const errorHandler = new ErrorHandler();
const app = express();

const StartServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use(router);
  app.use(errorHandler.handle());

  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      process.exit();
    })
    .on("close", () => {
      process.exit();
    });
};

try {
  StartServer();
  process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection Error: ", p, reason);
    process.exit();
  });
} catch (error) {
  console.log(error);
}
