import { Routes } from "../routing/routes";

const schoolTypeRoutes = express.Router();

schoolTypeRoutes.route(Routes.schoolType.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

schoolTypeRoutes.route(Routes.schoolType.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

schoolTypeRoutes.route(Routes.schoolType.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

schoolTypeRoutes.route(Routes.schoolType.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

module.exports = schoolTypeRoutes;