var router = require("express").Router();
var db = [];
const { json } = require("express");
var fs = require("fs");

router.get("/api/notes", function(req, res){
    db = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(db);
});

router.post("/api/notes", function(req, res){
    var newNote = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote);
    console.log(db);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err, data){
        if (err) throw err;
        console.log(data);
        res.json(db);
    });
});

// router.get("/api/notes", function(err, res) {
//     try {
//         notesData = fs.readFileSync("db/db.json", "utf8");
//         console.log("Success");
//         notesData = JSON.parse(notesData);
//     } catch (err) {
//         console.log("\n error (in app.get.catch):");
//         console.log(err);
//     }
//     res.json(notesData);
// });

module.exports = router;