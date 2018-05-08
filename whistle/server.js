var startWhistle = require('whistle');
var requestOpenration = require('./lib/requestOperation');

var proxy = startWhistle();
proxy.on('request', function (req) {

    if (requestOpenration.filterReq(req) ){

        req.on('end', function (data) {
            console.log(data)

        })
    }


})
console.log("server start")