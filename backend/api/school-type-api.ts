

import * as express from "express";
import * as dbo from "../database/connection.js";

const schoolTypeRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

schoolTypeRoutes.route(Routes.schoolType.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

schoolTypeRoutes.route(Routes.schoolType.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

schoolTypeRoutes.route(Routes.schoolType.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

schoolTypeRoutes.route(Routes.schoolType.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement School Type Get Method
    throw new Error("Not Implemented");
});

module.exports = schoolTypeRoutes;