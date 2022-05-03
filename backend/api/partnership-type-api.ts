
const partnershipTypeRoutes = require("express").Router();
const blah =  require("../database/connection");

partnershipTypeRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('partnership-type')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding PartnershipType Document!");
            } else {
                console.log('Found PartnershipType Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = partnershipTypeRoutes;