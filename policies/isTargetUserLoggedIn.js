/**
 * Check the target user from filter
 * Checks the current logged in user
 * if they are the same it let's execution run
 */

module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    if (!ctx.request.query.user) {
      return ctx.unauthorized('Specify a target user equal to your own id ?user=${user.id}')
    }
    console.log('isTargetUserLoggedIn there is a query param', ctx.request.query.user);

    const targetUser = ctx.request.query.user.toString();
    const loggedInUser = ctx.state.user.id.toString();

    if (targetUser === loggedInUser) {
      return await next(); // Keep going
    } else {
      return ctx.unauthorized('Target user is different from logged in user');
    }
  }

  return ctx.unauthorized(`You're not logged in!`)
};
