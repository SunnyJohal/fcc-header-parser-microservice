const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares...
app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static("public"));

// Index route...
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Whoami endpoint...
app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.headers["x-forwarded-for"],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
