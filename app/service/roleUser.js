'use strict';

const BaseService = require('./base');


class RoleUserService extends BaseService {
  constructor(...args) {
    super(...args);
    this.model = 'role_user';
  }
}

module.exports = RoleUserService;
