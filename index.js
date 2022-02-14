const express = require("express");
const bodyParser = require("body-parser");
const ping = require("./middlewares/ping");
const hello = require("./middlewares/hello");
const createSimpson = require("./middlewares/createSimpson");
const validateIdSimpson = require("./middlewares/validateIdSimpson");
const validateNameSimpson = require("./middlewares/validateNameSimpson");
const greeting = require("./middlewares/greeting");

const app = express();

app.use(bodyParser.json());

app.get("/ping", ping);

app.post("/ping", hello);

app.post("/hello", hello);

app.post("/greeting", greeting);

app.post("/simpsons", validateNameSimpson, validateIdSimpson, createSimpson);

app.listen("3000", () => {
  console.log("i'm ready");
});
