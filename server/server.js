const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express(); // express runs things in the order that you have them, bottom down.
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); // This is going to take form post data and turn it into an object that is available to us on request.body in our route handler.

app.post("/contact-form", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.name);
  res.send("Thank you for submitting your contact form");
});

//middleware logger
// app.use((req, res, next) => {
//   fs.appendFileSync("log.txt", `${req.url}\n`);
//   next();
// });

// app.get("/", (req, res) => {
//   // respond to an http get request at the root level (the slash)
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// app.get("/css/styles.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/css/styles.css"));
// });

// app.get("/", (req, res) => {
//   res.send("Beautiful World");
// });

app.use(express.static(path.join(__dirname, "../public"))); // i feel like rain man, I love backend

// app.get("/order/:name", (req, res) => {
//   // 127.0.0.1:3000/order/123 // you can name "name" whatever you want.
//   let name = req.params.name;
//   let email = req.query.email;
//   res.send(`Your name is ${name} and email is ${email}`);
// });

app.listen(3000);
