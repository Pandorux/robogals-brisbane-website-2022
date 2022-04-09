import { Routes } from "../routing/routes";

const execRoleRoutes = express.Router();

execRoleRoutes.route(Routes.execRole.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

execRoleRoutes.route(Routes.execRole.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

execRoleRoutes.route(Routes.execRole.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

execRoleRoutes.route(Routes.execRole.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

module.exports = execRoleRoutes;