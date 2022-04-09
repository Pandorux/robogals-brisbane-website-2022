import { Routes } from "../routing/routes";

const workshopRoutes = express.Router();

workshopRoutes.route(Routes.workshop.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

workshopRoutes.route(Routes.workshop.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

workshopRoutes.route(Routes.workshop.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

workshopRoutes.route(Routes.workshop.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

module.exports = workshopRoutes;