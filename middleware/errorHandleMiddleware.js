class CustomError {
  status;
  message;
  additionalInfo;

  constructor(message, status = 500, additionalInfo = {}) {
    this.message = message;
    this.status = status;
    this.additionalInfo = additionalInfo;
  }
}

module.exports.CustomError = CustomError;

module.exports = class ErrorHandler {
  handle = () => {
    return function (err, req, res) {
      let customError = err;
      if (!(err instanceof CustomError)) {
        customError = new CustomError(
          "Umm, seems like something broke! Please try again later."
        );
      }
      res.status(customError.status).send(customError);
    };
  };

  passthrough = (error, msg) => {
    if (error.status !== undefined) {
      throw new CustomError(error.message, error.status, error.additionalInfo);
    } else {
      throw new CustomError(msg, 500, null);
    }
  };

  apiErrorHandler = (error, res) => {
    if (error.status !== undefined) {
      res.status(error.status).json({
        message: error.message,
        additionalInfo: error.additionalInfo,
      });
    } else {
      res.status(500).json({ message: "Critical Error" });
    }
  };
}
