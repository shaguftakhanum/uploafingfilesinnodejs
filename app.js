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
);
const app = express();
app.use(express.json());
app.use('/static', express(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + "--" + file.originalname);
  }
});
var upload = multer({ storage: storage }).array('uploads', 2);
app.post("/uploads", (req, res) => {
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

})


app.use(routes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));



