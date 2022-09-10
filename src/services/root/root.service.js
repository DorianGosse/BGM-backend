// Initializes the `root` service on path `/root`
const { Root } = require('./root.class');
const createModel = require('../../models/root.model');
const hooks = require('./root.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/root', new Root(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('root');

  service.hooks(hooks);
};
