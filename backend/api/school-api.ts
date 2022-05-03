
const schoolRoutes = require("express").Router();
const blah =  require("../database/connection");

schoolRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('school')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding School Document!");
            } else {
                console.log('Found School Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = schoolRoutes;