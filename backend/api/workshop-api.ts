
const workshopRoutes = require("express").Router();
const blah =  require("../database/connection");

workshopRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('workshop')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding Workshop Document!");
            } else {
                console.log('Found Workshop Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = workshopRoutes;