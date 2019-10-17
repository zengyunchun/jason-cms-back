'use strict';

const BaseController = require('./base');

class ResourceController extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = 'resource';
  }
}

module.exports = ResourceController;
