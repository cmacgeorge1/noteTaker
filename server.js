// Express needs to interact with the front end
const express = require("express");

// Create an express server
const app = express();
// Set PORT(s)
const PORT = process.env.PORT || 8000;

// Initialize notesData


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

var api = require("./routes/apiRoutes");
var html = require("./routes/htmlRoutes");
app.use(api);
app.use(html);

// Make server listen
app.listen(PORT, function(){
    console.log("App listening on PORT");

})