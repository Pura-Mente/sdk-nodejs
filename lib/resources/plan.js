var requestManager = require('../request-manager');

var plan = module.exports = {};

plan.get = requestManager.describe({
  path: '/preapproval_plan/:id',
  method: 'GET'
});
