
const workshopTypeRoutes = require("express").Router();
const blah =  require("../database/connection");

workshopTypeRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('workshop-type')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding WorkshopType Document!");
            } else {
                console.log('Found WorkshopType Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = workshopTypeRoutes;