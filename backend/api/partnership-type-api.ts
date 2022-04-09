import { Routes } from "../routing/routes";

const partnershipTypeRoutes = express.Router();

partnershipTypeRoutes.route(Routes.partnershipType.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

partnershipTypeRoutes.route(Routes.partnershipType.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

partnershipTypeRoutes.route(Routes.partnershipType.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

partnershipTypeRoutes.route(Routes.partnershipType.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

module.exports = partnershipTypeRoutes;