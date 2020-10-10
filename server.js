// Express needs to interact with the front end
const express = require("express");

// Create an express server
const app = express();
// Set PORT(s)
const PORT = process.env.PORT || 8000;

// Initialize notesData


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./public"))) // STUCK HERE


app.get("/api/notes", function(err, res) {
    try {
        notesData = fs.readFileSync("db/db.json", "utf8");
        console.log("Success");
        notesData = JSON.parse(notesData);
    } catch (err) {
        console.log("\n error (in app.get.catch):");
        console.log(err);
    }
    res.json(notesData);
});