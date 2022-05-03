
const volunteerRoutes = require("express").Router();
const blah =  require("../database/connection");

const collectionName = 'volunteer'

volunteerRoutes.get('/id/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection(collectionName)
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding volunteer Document!");
            } else {
                console.log('Found volunteer Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

volunteerRoutes.get('/select', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection(collectionName)
        .find()
        .toArray(function(err, docs) {
            if (err) {
                res.status(400).send("Error Finding Documents!");
            } else {
                res.json(docs);
            }
        });
});

module.exports = volunteerRoutes;