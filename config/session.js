const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../app/models');

module.exports = {
  secret: 'snippetfy2018rocketseat',
  resave: false,
  saveuninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
