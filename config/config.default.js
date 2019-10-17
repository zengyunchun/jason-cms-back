/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570257837944_8790';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'jason-cms',
    },
    app: true, // 可以通过app.mysql拿到
    agent: false,
  };

  config.security = {
    csrf: false,
    // whiteList: [
    //   "http://localhost:8000" // 调试的时候跨域的配置
    // ]
  };

  return {
    ...config,
    ...userConfig,
  };
};
