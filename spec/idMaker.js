const generateId = (userContext, events, done) => {
  const id = Math.ceil(Math.random() * 10000000);
  userContext.vars.id = id;
  return done();
};

module.exports = {
  generateId
};
