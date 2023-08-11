/// 📝 NOTES
/// All error middlewares that handle HTTP req/res error
/// by converting it from regelur html-structure error to JSON format error
///______________________________________

// 👉 global error handler middleware to deal with not-existing route (404 response):
const errorNotFound = (req, res, next) => {
  // create new Error when the response status = 404 (NOT FOUND) :
  const error = new Error(`Route Not Found - ${req.originalUrl}`);
  res.status(404); // not found status.
  next(error);
};

// 👉 global error handler middleware to deal with any server error:
const errorHandler = (err, req, res, next) => {
  // if the statusCode is ok (200) make it Server-error (500)
  let responseStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let errorMessage = err.message;

  // error from mongoos about not found resource:
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    responseStatusCode = 404;
    errorMessage = 'Resource not found';
  }

  // get the error on json form:
  res.status(responseStatusCode).json({
    status: responseStatusCode,
    message: errorMessage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

//__________________________________
export { errorNotFound, errorHandler };
