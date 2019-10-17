'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.resources('user', '/user', controller.user);
  router.resources('role', '/role', controller.role);
  router.resources('resource', '/resource', controller.resource);
  router.resources('roleResource', '/roleResource', controller.roleResource);
  router.resources('roleUser', '/roleUser', controller.roleUser);
  // 上面的resources就包含下面指定post方法路由，具体参见 https://eggjs.org/zh-cn/basics/router.html
  // router.post('/users', controller.users.create);
};
