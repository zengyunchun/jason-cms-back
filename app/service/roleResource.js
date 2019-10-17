'use strict';

const BaseService = require('./base');


class RoleResourceService extends BaseService {
  constructor(...args) {
    super(...args);
    this.model = 'role_resource';
  }
}

module.exports = RoleResourceService;
