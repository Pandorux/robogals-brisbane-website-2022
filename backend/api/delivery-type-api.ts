import { Routes } from "../routing/routes";

const deliveryTypeRoutes = express.Router();

deliveryTypeRoutes.route(Routes.deliveryType.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Delivery Type Get Method
    throw new Error("Not Implemented");
});

deliveryTypeRoutes.route(Routes.deliveryType.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Delivery Type Get Method
    throw new Error("Not Implemented");
});

deliveryTypeRoutes.route(Routes.deliveryType.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Delivery Type Get Method
    throw new Error("Not Implemented");
});

deliveryTypeRoutes.route(Routes.deliveryType.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Delivery Type Get Method
    throw new Error("Not Implemented");
});

module.exports = deliveryTypeRoutes;