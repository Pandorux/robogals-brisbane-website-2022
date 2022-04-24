

import * as express from "express";
import * as dbo from "../database/connection.js";

const workshopTypeRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

workshopTypeRoutes.route(Routes.workshopType.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

workshopTypeRoutes.route(Routes.workshopType.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

workshopTypeRoutes.route(Routes.workshopType.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

workshopTypeRoutes.route(Routes.workshopType.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

module.exports = workshopTypeRoutes;