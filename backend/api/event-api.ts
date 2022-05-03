
const eventRoutes = require("express").Router();
const blah =  require("../database/connection");

const collectionName: string = 'event';

eventRoutes.get('/id/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection(collectionName)
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding Event Document!");
            } else {
                console.log('Found Event Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

eventRoutes.get('/select', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection(collectionName)
        .find()
        .sort({ startDateTime: 1 })
        .toArray(function(err, docs) {
            if (err) {
                res.status(400).send("Error Finding Documents!");
            } else {
                res.json(docs);
            }
        });
});

module.exports = eventRoutes;