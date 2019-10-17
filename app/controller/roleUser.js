'use strict';

const BaseController = require('./base');

class RoleUserController extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = 'roleUser';
  }
}

module.exports = RoleUserController;
