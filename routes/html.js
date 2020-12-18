let app = require("express").Router();
let path = require("path");


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});


module.exports = app

