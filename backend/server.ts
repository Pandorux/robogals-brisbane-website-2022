const express = require("express");
// const cors = require('cors');
const dbo = require('./db/conn');
const bodyParser = require('body-parser');

// const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 8080;

// Configuration
// ================================================================================================

const app = express();

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
