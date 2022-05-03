
const eventTypeRoutes = require("express").Router();
const blah =  require("../database/connection");

eventTypeRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('event-type')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding EventType Document!");
            } else {
                console.log('Found EventType Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = eventTypeRoutes;