import { Routes } from "../routing/routes";

const workshopTypeRoutes = express.Router();

workshopTypeRoutes.route(Routes.workshopType.AppendRead().ToString()).get(async function (req, res) {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

workshopTypeRoutes.route(Routes.workshopType.AppendCreate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

workshopTypeRoutes.route(Routes.workshopType.AppendUpdate().ToString()).post(function (req, res) {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

workshopTypeRoutes.route(Routes.workshopType.AppendDelete().ToString()).delete((req, res) => {
    // TODO: Implement Workshop Type Get Method
    throw new Error("Not Implemented");
});

module.exports = workshopTypeRoutes;