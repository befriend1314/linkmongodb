
// 插入多条数据
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017/runoobsss'
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbase = db.db("runoobsss");
//     var myobj  =  [
//         { name: '我是菜鸟', url: 'https://www.google.com', type: 'en'},
//         { name: '111', url: 'https://www.google1.com', type: 'en'},
//         { name: '222', url: 'https://www.google3.com', type: 'en'},
//         { name: '333', url: 'https://www.google2.com', type: 'en'},
//        ];
//     dbase.collection('site').insertMany(myobj, function (req, res) {
//         if ( err) throw err;
//         console.log('文档插入成功');
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close;
        
//     })
     
// })

// 查询数据 find()
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     dbo.collection('site').find({}).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

// 指定条件查询
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     let whereStr = {"name":'菜鸟教程'};  // 查询条件
//     let key = '菜鸟';
//     let str = {$regex: key, $options:'i'};
//     let regStr = {"name": str};
//     dbo.collection('site').find({}).project({url: 1, _id: 0}).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

// 更新数据
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     let whereStr = {"name":'菜鸟教程'};  // 查询条件
//     let key = '菜鸟';
//     let str = {$regex: key, $options:'i'};
//     let regStr = {"name": str};
//     var updateStr = {$set: { "url" : "https://www.runoob.com111111111111" }};
//     dbo.collection('site').updateOne(whereStr, updateStr, function (err, result) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     })
// })

// 更新多条

// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     let whereStr = {"type":'en'};  // 查询条件
//     var updateStr = {$set: { "url" : "https://www.baidu.com" }};
//     dbo.collection('site').updateMany(whereStr, updateStr, function (err, result) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     })
// })

// 删除一条

// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     let whereStr = {"name":'菜鸟教程'};  // 查询条件
//     dbo.collection('site').deleteOne(whereStr, function (err, result) {
//         if (err) throw err;
//         console.log("删除成功");
//         db.close();
//     })
// })


// 删除多条
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     let whereStr = {"type":'en'};  // 查询条件
//     dbo.collection('site').deleteMany(whereStr, function (err, result) {
//         if (err) throw err;
//         console.log("删除成功");
//         db.close();
//     })
// })


// 排序
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     let whereStr = {"type":'en'};  // 查询条件
//     let mysort = {"type": 1}; // 按type 字段升序
//     dbo.collection('site').find({}).sort(mysort).limit(2).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

// 新集合
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let myobj1 = [{ _id: 0, product_id: 1, status: 2 }];
//     let myobj2 = [{ _id: 1, name: '笔记本电脑' },{ _id: 2, name: '耳机' },{ _id: 3, name: '台式电脑' }];
//     let dbo = db.db('runoobsss');
//     dbo.collection('orders').insertMany(myobj1, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     })
//     dbo.collection('products').insertMany(myobj2, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

// 实现左链接
// let MongoClient = require('mongodb').MongoClient
// let url = 'mongodb://127.0.0.1:27017'

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     let dbo = db.db('runoobsss');
//     dbo.collection('orders').aggregate([
//         {
//             $lookup: {
//                 from: 'products',            // 右集合
//                 localField: '_id',    // 左集合 join 字段
//                 foreignField: '_id',         // 右集合 join 字段
//                 as: 'orderdetails'           // 新生成字段（类型array）
//             }
//         }
//     ]).toArray(function (err, res) {
//         if (err) throw err;
//         console.log(JSON.stringify(res));
//         db.close();
//     })
// })

// 删除集合

let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db('runoobsss');
    dbo.collection('site').drop( function (err, res) {
        if(err) throw err;
        if(res) console.log('删除集合成功');
        db.close;
        
    })
})