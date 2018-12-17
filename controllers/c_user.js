const connection = require('../tool/mysql');


exports.showSign = (req, res) => {
    res.render('signin.html');
}
exports.handleSign = (req, res) => {
    const body = req.body;
    console.log(body);
    const sqlstr = 'select * from users where email = ?'
    connection.query(sqlstr,body.email,(err,data) => {
        if(err)  {throw err};
        // console.log(data);

        // 判断查询的数据长度是否为0
        if (data.length == 0 ) {
            res.send({
                code:1,
                msg:'用户名不存在'
            });
         
        }
        if (data[0].password != body.password) {
            return res.send({
                code:2,
                msg:'密码错误'
            });
        }
        res.send({
            code:200,
            msg:'登录成功'
        });
    });


  

}