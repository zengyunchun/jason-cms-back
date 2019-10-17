'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
    async create(entity) {
        const { app } = this;
        // console.log("UsersService/create", user);
        // 这里直接用mysql去表里插入数据
        const result = await app.mysql.insert(this.model, entity);
        const affectedRows = result.affectedRows;
        return result;
    }

    async list(_pageNum, _pageSize) {
        // 获取所有role所有表的信息，可以用postman测试
        // console.log("2-pageNum", pageNum);
        // console.log("2-pageSize", pageSize);
        // let a = (pageNum - 1) * pageSize;
        // let b = pageSize;
        //  console.log("2-_pageNum: ", _pageNum);
        //  console.log("2-_pageSize: ", _pageSize);
         //_pageSize = 3;
        // 真TM的神奇，这里计算的不行，写死就可以
        let result = this.app.mysql.select(this.model, {
            //order: [[]],
            offset: ((_pageNum - 1) * _pageSize),
            limit: _pageSize,
        });
        // console.log("result", result);
        //const result = this.app.mysql.select(this.model);
        return result;
    }

    async update(entity) {
        // console.log(user);
        const result = this.app.mysql.update(this.model, entity);
        const affectedRows = result.affectedRows;
        return result;
    }

    async destroy(id) {
        // console.log(user);
        // 这里id要用对象包起来
        const result = this.app.mysql.delete(this.model, { id });
        const affectedRows = result.affectedRows;
        return result;
    }

}

module.exports = BaseService;
