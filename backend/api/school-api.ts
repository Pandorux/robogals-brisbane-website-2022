

import * as express from "express";
import * as dbo from "../database/connection.js";

const schoolRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

schoolRoutes.route(Routes.school.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

schoolRoutes.route(Routes.school.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

schoolRoutes.route(Routes.school.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

schoolRoutes.route(Routes.school.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement School Get Method
    throw new Error("Not Implemented");
});

module.exports = schoolRoutes;