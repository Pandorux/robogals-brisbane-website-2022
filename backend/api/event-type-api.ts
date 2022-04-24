

import * as express from "express";
import * as dbo from "../database/connection.js";

const eventTypeRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

eventTypeRoutes.route(Routes.eventType.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

eventTypeRoutes.route(Routes.eventType.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

eventTypeRoutes.route(Routes.eventType.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

eventTypeRoutes.route(Routes.eventType.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Event Type Get Method
    throw new Error("Not Implemented");
});

module.exports = eventTypeRoutes;