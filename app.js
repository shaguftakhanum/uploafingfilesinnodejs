const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const db = require('./config/database');
const routes =  require('./routes');

db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})
db.sync(
  // {force:true}
);
const app = express();
app.use(express.json());
app.use(cors());
app.use('/static', express(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    console.log('file => ' ,  file);
    callback(null, file.fieldname + '-' + Date.now() + "--" + file.originalname);
  }


});

var upload = multer({ storage: storage }).array('uploads', 2);
app.post("/uploads", (req, res) => {
  // console.log(req.upload);
  upload(req, res, (err) => {
    if (err) {
      console.log('error =>', err);
      res.status(400).send("Something went wrong!");
    }
    // const reqFiles = req.files;
    const filePaths = req.files.map(function(fileData){
        return `${fileData.fieldname}/${fileData.originalname}`
    })
    res.status(200).json({
      paths: filePaths
    });

  });

})

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));



