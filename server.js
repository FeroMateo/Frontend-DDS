const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'https://tp-dds-g7.herokuapp.com/'));
});
const port = process.env.PORT || 80;
app.listen(port);