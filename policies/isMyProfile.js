module.exports = async (ctx, next) =>{
  if (ctx.state.user) {
    if (!ctx.params.id) {
      return ctx.unauthorized('Please use this policy only in single user requests');
    }

    const targetUser = ctx.params.id.toString();
    const loggedInUser = ctx.state.user.id.toString();

    if (targetUser === loggedInUser) {
      return await next(); // Keep going
    } else {
      return ctx.unauthorized('Target user is different from logged in user');
    }
  }

  return ctx.unauthorized(`You're not logged in!`)
};
