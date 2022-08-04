const express = require('express');
const app = express();
const blogRoute = require("../routes/blog.routes");
const fileRoute = require("../routes/file.routes");
const postRoute = require("../routes/post.routes");
app.use("/api", fileRoute);
app.use("/api", blogRoute);
app.use("/api",postRoute);
module.exports =app;
