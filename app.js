const express = require('express');
const app = express();

const indexRouter = require('./router/index');
const topicRouter = require('./router/topic');

app.use('/public', express.static(__dirname + 'public'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/topic', topicRouter);

let port = 3000;
app.listen(port, function () {
    console.log(`Server running... port ${port}`)
});