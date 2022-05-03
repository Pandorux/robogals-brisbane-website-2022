
const deliveryTypeRoutes = require("express").Router();
const blah = require("../database/connection.ts");

deliveryTypeRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('delivery-type')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding DeliveryType Document!");
            } else {
                console.log('Found DeliveryType Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = deliveryTypeRoutes;