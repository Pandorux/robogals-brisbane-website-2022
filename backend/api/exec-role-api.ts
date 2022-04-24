

import * as express from "express";
import * as dbo from "../database/connection.js";

const execRoleRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

execRoleRoutes.route(Routes.execRole.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

execRoleRoutes.route(Routes.execRole.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

execRoleRoutes.route(Routes.execRole.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

execRoleRoutes.route(Routes.execRole.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Exec Role Get Method
    throw new Error("Not Implemented");
});

module.exports = execRoleRoutes;