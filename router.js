const express= require('express');
const user = require('./controllers/c_user');
const router = express.Router();


router
.get('/signin',user.showSign)
.post('/signin',user.handleSign);


// 导出router
module.exports = router;