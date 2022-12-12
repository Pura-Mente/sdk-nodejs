var requestManager = require('../request-manager');

var preapproval = module.exports = {};

preapproval.get = requestManager.describe({
  path: '/preapproval_plan/:id',
  method: 'GET'
});
