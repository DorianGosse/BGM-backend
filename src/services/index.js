const root = require('./root/root.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(root);
};
