const express = require('express');
const app = express();
const blogRoute = require("../routes/blog.routes");
const fileRoute = require("../routes/file.routes");
const postRoute = require("../routes/post.routes");
const tagRoute = require("../routes/tag.routes");
const rtsIndex = require('../routes/upload.routes');
app.use("/api", fileRoute);
app.use("/api", blogRoute);
app.use("/api",postRoute);
app.use("/api",tagRoute);
app.use("/api",rtsIndex);

module.exports =app;
