var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port       = 8080;  			      // set our port

// REGISTER STATIC FILES -------------------------------
app.use(express.static(__dirname+"/target/static/"));
app.use(express.static(__dirname+"/target/react-portlet/"));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/social/v1-alpha3/portal/activity_stream/feedByTimestamp.json', function(req, res) {
    res.set('content-type','application/json; charset=utf8')
    res.sendFile(__dirname+"/target/static/api/feedByTimestamp.json");
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
app.use('/rest/private/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
