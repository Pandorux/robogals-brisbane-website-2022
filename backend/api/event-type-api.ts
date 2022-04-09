import { Routes } from "../routing/routes";

const eventTypeRoutes = express.Router();

eventTypeRoutes.route(Routes.eventType.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

eventTypeRoutes.route(Routes.eventType.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

eventTypeRoutes.route(Routes.eventType.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

eventTypeRoutes.route(Routes.eventType.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

module.exports = eventTypeRoutes;