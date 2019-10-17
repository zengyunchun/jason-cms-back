'use strict';

const BaseService = require('./base');


class ResourceService extends BaseService {
  constructor(...args) {
    super(...args);
    this.model = 'resource';
  }
}

module.exports = ResourceService;
