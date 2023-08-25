const captureDateMiddleware = (req, res, next) => {
  console.log(
    `URL:  ${req.url}, Method:  ${req.method}, Timestamp: ${new Date()}, "In Middleware "../middleware/middleware.js" `
  );
  next();
};

module.exports = captureDateMiddleware;
