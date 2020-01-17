const Party = require("express").Router();
const db = require("../../db");

Party.get("/", (req, res) => {
  res.render("addition/party");
});

Party.post("/Add", (req, res) => {});

module.exports = Party;
