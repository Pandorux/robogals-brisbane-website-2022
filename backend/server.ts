// Loads the configuration from config.env to process.env
require('dotenv').config({ path: "./config.env" });

const express = require("express");
// const cors = require('cors');
const dbo = require('./database/connection.ts');
const bodyParser = require('body-parser');

// const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 8080;

// Configuration
// ================================================================================================

const app = express();

const apiRouter = require('./api/api.ts');
app.use('/api', apiRouter);

// Sets-up CORS for Cross-Origin-Resource-Sharing
// app.use(cors());

// Converts API Resources to JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
console.log("Routes: ", app.routes);
console.log("API Routes", apiRouter);

apiRouter.stack.forEach(function(r){
    if (r.route && r.route.path){
        console.log('API Route: ', r.route)

        // r.routes.forEach(function(c) {
        //     console.log(`Route ${r.route.path}`, c.route.path)
        // })
    }
})
