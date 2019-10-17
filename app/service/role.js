'use strict';

const BaseService = require('./base');


class RoleService extends BaseService {
  constructor(...args) {
    super(...args);
    this.model = 'role';
  }
}

module.exports = RoleService;
