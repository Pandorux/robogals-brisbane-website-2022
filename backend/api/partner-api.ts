import { Routes } from "../routing/routes";

const partnerRoutes = express.Router();

partnerRoutes.route(Routes.partner.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

partnerRoutes.route(Routes.partner.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

partnerRoutes.route(Routes.partner.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

partnerRoutes.route(Routes.partner.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

module.exports = partnerRoutes;