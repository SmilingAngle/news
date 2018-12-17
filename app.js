const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();


// 配置静态资源
app.use('/public',express.static('./public'));
// 配置第三方资源
app.use('/node_modules',express.static('./node_modules'));
// 配置模板引擎
app.engine('html', require('express-art-template'));

// 配置body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// 挂载路由
app.use(router);



app.listen('2222',() => {
    console.log('run ----');
})