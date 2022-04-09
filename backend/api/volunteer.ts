import { Routes } from "../routing/routes";

const volunteerRoutes = express.Router();

volunteerRoutes.route(Routes.volunteer.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

volunteerRoutes.route(Routes.volunteer.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

volunteerRoutes.route(Routes.volunteer.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

volunteerRoutes.route(Routes.volunteer.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Volunteer Get Method
    throw new Error("Not Implemented");
});

module.exports = volunteerRoutes;