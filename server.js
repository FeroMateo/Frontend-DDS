
/*
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);

*/
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const history = require('connect-history-api-fallback');

app = express();
app.use(history({
  index: '/'
}));
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);