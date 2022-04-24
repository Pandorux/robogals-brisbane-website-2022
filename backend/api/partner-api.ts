

import * as express from "express";
import * as dbo from "../database/connection.js";

const partnerRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

partnerRoutes.route(Routes.partner.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

partnerRoutes.route(Routes.partner.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

partnerRoutes.route(Routes.partner.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

partnerRoutes.route(Routes.partner.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Partner Get Method
    throw new Error("Not Implemented");
});

module.exports = partnerRoutes;