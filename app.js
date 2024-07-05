import express from "express";
import cors from "cors";

const app = express();

const StartServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app
    .listen(8000, () => {
      console.log(`listening to port ${8000}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    })
    .on("close", () => {
      process.exit();
    });
};

try {
  StartServer();
} catch (error) {
  console.log(error);
}
