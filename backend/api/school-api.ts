import { Routes } from "../routing/routes";

const schoolRoutes = express.Router();

schoolRoutes.route(Routes.school.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

schoolRoutes.route(Routes.school.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

schoolRoutes.route(Routes.school.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

schoolRoutes.route(Routes.school.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

module.exports = schoolRoutes;