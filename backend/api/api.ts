const apiRoutes = require("express").Router();

const deliveryTypeRouter = require('./delivery-type-api.ts');
const eventRouter = require('./event-api.ts');
const eventTypeRouter = require('./event-type-api.ts');
const execRoleRouter = require('./exec-role-api.ts');
const partnerRouter = require('./partner-api.ts');
const partnershipTypeRouter = require('./partnership-type-api.ts');
const schoolRouter = require('./school-api.ts');
const schoolTypeRouter = require('./school-type-api.ts');
const volunteerRouter = require('./volunteer-api.ts');
const workshopTypeRouter = require('./workshop-type-api.ts');
const workshopRouter = require('./workshop-api.ts');

apiRoutes.get('/test', (req, res) => {
    res.send("Hello Api!");
});

apiRoutes.use('/delivery-type', deliveryTypeRouter);
apiRoutes.use('/event', eventRouter);
apiRoutes.use('/event-type', eventTypeRouter);
apiRoutes.use('/exec-role', execRoleRouter);
apiRoutes.use('/partner', partnerRouter);
apiRoutes.use('/partnership-type', partnershipTypeRouter);
apiRoutes.use('/school', schoolRouter);
apiRoutes.use('/school-type', schoolTypeRouter);
apiRoutes.use('/volunteer', volunteerRouter);
apiRoutes.use('/workshop-type', workshopTypeRouter);
apiRoutes.use('/workshop', workshopRouter);

module.exports = apiRoutes;