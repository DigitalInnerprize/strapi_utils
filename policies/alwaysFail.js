/**
 * Makes the request always fail with status code 401
 * Useful to Commit to Source Control the fact that a route is not meant to be used
 */

module.exports = async (ctx, _) => {
  return ctx.unauthorized('This endpoint is closed')
};
