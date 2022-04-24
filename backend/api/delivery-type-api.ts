
const deliveryTypeRoutes = require("express").Router();
const dbo =  require("../database/connection");

const CollectionConstants = require("../routing/collection-constants.ts");
const Routes = require("../routing/routes.ts");



deliveryTypeRoutes.get('/', (req, res) => {

})

deliveryTypeRoutes.get('/test', (req, res) => {
    res.send("Hello Delivery Type!");
});

deliveryTypeRoutes.get(Routes.deliveryType.Prepend().AppendRead().ToString(), function (req, res) {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection(CollectionConstants.deliveryType)
        .findOne({ "id": req.body.id }, function (err, result) {
            if (err) {
                res.status(400).send("Error Finding DeliveryType Document!");
            } else {
                console.log('Found DeliveryType Document', result.id);
                console.log('req body info', req.body);
                res.json(result);
            }
        });
});

// deliveryTypeRoutes.use(Routes.deliveryType.Prepend().AppendCreate().ToString()).post(function (req, res) {
//     // TODO: Implement Delivery Type Get Method
//     throw new Error("Not Implemented");
// });

// deliveryTypeRoutes.use(Routes.deliveryType.Prepend().AppendUpdate().ToString()).post(function (req, res) {
//     // TODO: Implement Delivery Type Get Method
//     throw new Error("Not Implemented");
// });

// deliveryTypeRoutes.use(Routes.deliveryType.Prepend().AppendDelete().ToString()).delete((req, res) => {
//     // TODO: Implement Delivery Type Get Method
//     throw new Error("Not Implemented");
// });

module.exports = deliveryTypeRoutes;