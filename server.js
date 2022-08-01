const express=require('express');
const bodyParser = require('body-parser');
//var path = require('path')
const cors = require('cors');
const multer=require('multer');
const app=express();

const fileStorageEngine=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'./images')
    },
    filename: (req,file,cb)=>{

        console.log('file =>' ,  req.file);
        console.log('file =>' ,  req.image);

      cb(null, Date.now() +"--"+ req.file.originalname)  
    }
});


const upload=multer({storage:fileStorageEngine})
app.post('/single',upload.single('image'),(req,res)=>{
    console.log(req.file);
});
// app.post('/multiple',upload.array('imagess',2),(req,res)=>{
//     console.log(req.file);

// });
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));
app.get("/", (req, res) => {
    res.send("fileupload!!!" );
  });
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
