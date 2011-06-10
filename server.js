var sys     = require("sys");
var mongodb = require("mongodb");

var mongo = new mongodb.MongoDB();

mongo.addListener("close", function () {
    sys.puts("Closing connection!");
});

mongo.addListener("connection", function () {

    mongo.getCollections(function (collections) {
        sys.puts("the collections in the db are " + JSON.stringify(collections));
    });

    var blocks = mongo.getCollection('blocks');
});

mongo.connect({
    hostname: '127.0.0.1',
    port: 27017,
    db: 'geoip'
});

