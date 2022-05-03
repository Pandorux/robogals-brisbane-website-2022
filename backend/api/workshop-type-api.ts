
const workshopTypeRoutes = require("express").Router();
const blah =  require("../database/connection");

const collectionName = 'workshop-type'

workshopTypeRoutes.get('/id/:id', function (req, res) {
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

workshopTypeRoutes.get('/select', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection(collectionName)
        .find({ }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding DeliveryType Documents!");
            } else {
                res.json(result);
            }
        })
        .sort({ startDateTime: 1 });
});

module.exports = workshopTypeRoutes;