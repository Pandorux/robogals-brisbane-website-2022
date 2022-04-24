

import * as express from "express";
import * as dbo from "../database/connection.js";

const partnershipTypeRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

partnershipTypeRoutes.route(Routes.partnershipType.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

partnershipTypeRoutes.route(Routes.partnershipType.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

partnershipTypeRoutes.route(Routes.partnershipType.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

partnershipTypeRoutes.route(Routes.partnershipType.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Partnership Type Get Method
    throw new Error("Not Implemented");
});

module.exports = partnershipTypeRoutes;