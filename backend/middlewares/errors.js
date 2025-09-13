export const notfound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({  // <-- use res.json instead of req.json
    message: err.message,
    stack: null, // you can set err.stack if you want to see it in dev
  });
}
