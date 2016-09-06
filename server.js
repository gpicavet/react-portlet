var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port = 8080;  			      // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/social/v1-alpha3/portal/activity_stream/feedByTimestamp.json', function(req, res) {
    res.set('content-type','application/json; charset=utf8')
    res.sendFile(__dirname+"/src/mock/feedByTimestamp.json");
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/rest/private/api', router);

app.use(express.static(__dirname+"/target/static/"));
app.use(express.static(__dirname+"/target/react-portlet/js/"));

// START THE SERVER
// =============================================================================
app.listen(port);
