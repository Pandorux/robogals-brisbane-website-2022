
import * as express from "express";
import * as dbo from "../database/connection.js";

const eventRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

eventRoutes.route(Routes.event.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

eventRoutes.route(Routes.event.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

eventRoutes.route(Routes.event.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

eventRoutes.route(Routes.event.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Event Get Method
    throw new Error("Not Implemented");
});

module.exports = eventRoutes;