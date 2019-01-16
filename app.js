const   express         = require('express'),
        mongoose        = require('mongoose'),
        app             = express(),
        passport        = require('passport'),
        page            = require('./routes/page'),
        localStrategy   = require('passport-local').Strategy,
        session         = require('express-session'),
        PORT            = 3000 || process.env.PORT,
        bodyParser      = require('body-parser'),
        methodOverride  = require('method-override'); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', page);

app.listen(PORT, process.env.IP, ()=> console.log(`Listening on PORT ${PORT}`));