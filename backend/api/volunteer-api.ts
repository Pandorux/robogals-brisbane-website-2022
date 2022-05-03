
const volunteerRoutes = require("express").Router();
const blah =  require("../database/connection");

volunteerRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('volunteer')
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

module.exports = volunteerRoutes;