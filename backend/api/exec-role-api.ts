
const execRoleRoutes = require("express").Router();
const blah =  require("../database/connection");

execRoleRoutes.get('/:id', function (req, res) {
    const dbConnect = blah.getDb();

    dbConnect
        .collection('exec-role')
        .findOne({ id: Number(req.params.id) }, function (err, result) {
            console.log('result', result);
            if (err) {
                res.status(400).send("Error Finding ExecRole Document!");
            } else {
                console.log('Found ExecRole Document', result.id);
                console.log('req body info', result.body);
                res.json(result);
            }
        });
});

module.exports = execRoleRoutes;