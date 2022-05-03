
const partnerRoutes = require("express").Router();
const blah =  require("../database/connection");

partnerRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('partner')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding Partner Document!");
            } else {
                console.log('Found Partner Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = partnerRoutes;