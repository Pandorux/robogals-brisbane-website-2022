
const schoolTypeRoutes = require("express").Router();
const blah =  require("../database/connection");

schoolTypeRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('school-type')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding SchoolType Document!");
            } else {
                console.log('Found SchoolType Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = schoolTypeRoutes;