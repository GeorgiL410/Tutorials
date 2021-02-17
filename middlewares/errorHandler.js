const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Something went wrong';

  //TODO: add page to render
}

module.exports = errorHandler;