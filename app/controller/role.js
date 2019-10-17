'use strict';

const BaseController = require('./base');

class RoleController extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = 'role';
  }
}

module.exports = RoleController;
