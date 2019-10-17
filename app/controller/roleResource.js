'use strict';

const BaseController = require('./base');

class RoleResourceController extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = 'roleResource';
  }
}

module.exports = RoleResourceController;
