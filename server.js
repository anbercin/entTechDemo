var express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    helmet = require('helmet'),
    trades = require('./server/trades'),
    sqlinit = require('./server/sqlinit'),
    path = require('path'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, 'client', 'build')));


app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
});

app.get('/trades',  trades.findAll);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
