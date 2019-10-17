'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('测试role/test', () => {
  // it('should assert', () => {
  //   const pkg = require('../../../package.json');
  //   assert(app.config.keys.startsWith(pkg.name));

  //   // const ctx = app.mockContext({});
  //   // yield ctx.service.xx();
  // });

  it('增加role功能', async () => {
    const role = {
      name: "测试名字"
    }

    let result = await app.httpRequest()
      .post('/role')
      .type("json")
      .send(role)
      .expect(200);

      let {insertId} = result.body;
      assert(!isNaN(insertId));
      //let result
  });

  it('分页查询role功能', async () => {
    let result = await app.httpRequest()
      // .get('/role?pageNum=1&pageSize=5')
      .get('/role')
      .expect(200);

      let roles = result.body;
      assert(Array.isArray(roles) && roles.length === 5);
      //let result
  });
});
