var express = require('express');
var router = express.Router();

const multiparty=require('multiparty')
const fs = require('fs');
const path= require("path");
const uuid=require('uuid')

const db = require('../helper/db');
const {uuid2} = require('../helper/config')

router.post('/upload',(req,res,next)=>{
    const form = new multiparty.Form();
    //设置单文件大小限制 2M 
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.uploadDir='upload'   

   
    form.parse(req,function(err,flields,files) {
        //拿到扩展名
        const extname = path.extname(files.file[0].originalFilename);
        //uuid生成 图片名称
        const nameID = (uuid.v4()).replace(/\-/g,'');
        const oldpath = path.normalize(files.file[0].path);

        //新的路径
        let articleid = flields.articleid[0]
        let newfilename = nameID+extname;
        var newpath =  './upload/'+newfilename;
        //改名
        fs.rename(oldpath,newpath,async (err) =>{
            if(err){
                res.send({ msg: '文件上传失败:' }).end();
            }else{
                let editSql = `INSERT INTO imgarray (articleid,imgurl) VALUES ("${articleid}","/upload/${newfilename}");`
                let sqlerr = await db(editSql)
                res.send({ msg: '文件上传成功:' })
            }
        })


    })

    
    
})
router.post('/edit', async (req,res,next) =>{
        let {openid,title,content,locationinfo,type} = req.body
        let articleid = uuid.v4()
        let editSql = `INSERT INTO articles (articleid,openid, title, content, locationinfo,type) VALUES ("${articleid}","${openid}", "${title}", "${content}","${locationinfo}","${type}");`
        try{
            const articles = await db(editSql);
            console.log(articles,'articles')
            if(articles.serverStatus == 2){
                res.send({
                    code: 0,
                    message: 'success',
                    data:{
                        articleid:articleid
                    }
                });
            }else{
                res.send({
                    code: -1,
                    data: 1,
                    message: 'insert error'
                });
            }
            
        }catch(e){
            res.send({
                code: -1,
                data: 1,
                message: 'error'
            });
        }   
})

router.get('/', async (req,res,next) =>{
    let findAll = await db("SELECT * FROM articles")
    console.log(findAll)
})
module.exports = router;