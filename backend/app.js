const express = require('express');
const app = express();
const cors = require('cors');
require("./db")
app.use(cors())
app.listen(4001,function(){
    console.log('server started')
})
