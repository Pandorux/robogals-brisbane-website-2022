

import * as express from "express";
import * as dbo from "../database/connection.js";

const volunteerRoutes = express.Router();
import { CollectionConstants } from "../routing/collection-constants.js";
import { Routes } from "../routing/routes.js";

volunteerRoutes.route(Routes.volunteer.Prepend().AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

volunteerRoutes.route(Routes.volunteer.Prepend().AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

volunteerRoutes.route(Routes.volunteer.Prepend().AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

volunteerRoutes.route(Routes.volunteer.Prepend().AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

module.exports = volunteerRoutes;