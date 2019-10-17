const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const gameRouter = require('./routes/game');

app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/game', gameRouter);



app.listen(3000, function(){
    console.log('Server start: port 3000');
});