const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoute")
mongoose.Promise = Promise;

mongoose.connect("mongodb://heroku_8d4dj4zf:hqh2hkmk5iujf9u1uepa3mkrfc@ds127034.mlab.com:27034/heroku_8d4dj4zf");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static assets if in production (running on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use("/api", apiRoutes)
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});