

import * as express from "express";
import * as dbo from "../database/connection.js";

const workshopRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

workshopRoutes.route(Routes.workshop.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

workshopRoutes.route(Routes.workshop.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

workshopRoutes.route(Routes.workshop.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

workshopRoutes.route(Routes.workshop.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Workshop Get Method
    throw new Error("Not Implemented");
});

module.exports = workshopRoutes;