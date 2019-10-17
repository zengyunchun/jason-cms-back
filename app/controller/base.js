'use strict';
// "test": "npm run lint -- --fix && npm run test-local",
const Controller = require('egg').Controller;

class BaseController extends Controller {
    // 这里的名字create都是egg的restful风格命名定义死的
    async create() {
        const { app, ctx, service } = this;
        const user = ctx.request.body;
        // 去服务里面获取真实数据
        const result = await service[this.model].create(user);
        ctx.body = result;
    }

    async index() {
        // 分页, 这样写居然是引用会被改，也是醉了
        // let { pageNum = 1, pageSize = 5 } = this.ctx.query;
        
        // 居然要这样深拷贝才行
        let pn = parseInt((this.ctx.query.pageNum || 1).toString());
        let ps = parseInt((this.ctx.query.pageSize || 5).toString());

        // console.log("query", this.ctx.query);
        // console.log("pageNum", pn);
        // console.log("pageSize", ps);
        const result = await this.service[this.model].list(pn, ps);
        this.ctx.body = result;
    }

    async update() {
        const { app, ctx, service } = this;
        const id = ctx.params.id;
        const updateUser = ctx.request.body;
        updateUser.id = id;
        // console.log("update控制器", updateUser);
        const result = await service[this.model].update(updateUser);
        this.ctx.body = result;
    }

    async destroy() {
        const { app, ctx, service } = this;
        const id = ctx.params.id;
        const result = await service[this.model].destroy(id);
        this.ctx.body = result;
    }
}

module.exports = BaseController;
