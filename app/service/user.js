'use strict';

const BaseService = require('./base');


class UserService extends BaseService {
  constructor(...args) {
    super(...args);
    this.model = 'user';
  }
}

module.exports = UserService;
