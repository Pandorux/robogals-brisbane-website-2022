const apiRoutes = require("express").Router();
const deliveryTypeRouter = require('./delivery-type-api.ts');

apiRoutes.get('/test', (req, res) => {
    res.send("Hello Api!");
});

apiRoutes.use('/del', deliveryTypeRouter);
// apiRoutes.use(eventRoutes);
// apiRoutes.use(eventTypeRoutes);
// apiRoutes.use(execRoleRoutes);
// apiRoutes.use(partnerRoutes);
// apiRoutes.use(partnershipTypeRoutes);
// apiRoutes.use(schoolRoutes);
// apiRoutes.use(schoolTypeRoutes);
// apiRoutes.use(volunteerRoutes);
// apiRoutes.use(workshopTypeRoutes);
// apiRoutes.use(workshopRoutes);

module.exports = apiRoutes;