module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    return await next();
  }

  return ctx.unauthorized('You need to be logged in');
};
