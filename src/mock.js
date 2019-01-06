// 引入mockjs  
const Mock = require('mockjs');
//调用mock方法模拟数据
Mock.mock(
    '/weiLogin/queryAll', {
        data: {
            user: "Yimi",
            items: [{
                    id: 1,
                    name: "练车",
                    done: true
                },
                {
                    id: 2,
                    name: "看课外书",
                    done: false
                },
                {
                    id: 3,
                    name: "学习angular",
                    done: true
                }
            ]
        }
    });

Mock.mock(
    '/weiLogin/deleteById', {
        data: {
            user: "gakki",
        }
    });

Mock.mock(
    '/weiProduct/productDetail/{productId}', {
        data: {
            user: "shanghai",
        }
    });