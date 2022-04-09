import { Routes } from "../routing/routes";

const eventRoutes = express.Router();

eventRoutes.route(Routes.event.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

eventRoutes.route(Routes.event.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

eventRoutes.route(Routes.event.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

eventRoutes.route(Routes.event.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

module.exports = eventRoutes;