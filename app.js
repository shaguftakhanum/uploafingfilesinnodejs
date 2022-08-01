const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const postRoute = require("./routes/file.routes");
const blogRoute = require("./routes/blog.routes");
const Blog = require('./model/blog');
const File = require('./model/file');
const db = require('./config/database');
const { resolve } = require('path');
const { rejects } = require('assert');
// db.authenticate().then(() => {
//   console.log('Database connected...');
// }).catch(err => {
//   console.log('Error: ' + err);
// })
//db.sync(
// );

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname+'images')));
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './images');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + "--" + file.originalname);
  }
});
var upload = multer({ storage: storage }).array('images', 2);
app.post("/images", (req, res) => {
  console.log('sss');
  upload(req, res, (err) => {
    if (err) {
      console.log('error =>', err);
      res.status(400).send("Something went wrong!");
    }
    res.status(200).json({
      //url:req.files[0].filename
      url: req.files

    });

  });

});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"./images/a.jpg"));
});
app.use("/api", postRoute);
app.use("/api", blogRoute);








const PORT = process.env.PORT || 7000;


app.listen(PORT, console.log(`Server started on port ${PORT}`));



//https://expressjs.com/en/starter/static-files.html
//https://dev.to/ericchapman/nodejs-express-part-2-route-parameters-ea3
