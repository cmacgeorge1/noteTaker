var router = require("express").Router();
var db = [];
const { json } = require("express");
var fs = require("fs");

router.get("/api/notes", function(req, res){
    db = JSON.parse(fs.readFileSync("../db/db.json"));
    res.json(db);
});

router.post("/api/notes", function(req, res){
    var newNote = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote);
    fs.writeFileSync(("../db/db.json", JSON.stringify(db)));
    res.json(db);
});