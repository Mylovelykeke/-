var express = require('express');
var router = express.Router();
const db = require('../helper/db');

router.post('/edit', async(req,res,next)=>{
    console.log(1)
    let [id,openid,title,content,timeStamp,locationinfo] = ['','','','','','']
    let editSql = `INSERT INTO articles (id, openid, title, content, timeStamp, locationinfo) VALUES (${id}, ${openid}, ${title}, ${content}, ${timeStamp}, ${locationinfo})`
    try{
        // const articles = await db('SELECT * FROM articles');
        res.send({
            code: 0,
            data: 1,
            message: ''
        });
    }catch(e){

    }   
})
module.exports = router;