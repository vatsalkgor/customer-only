const Item = require("express").Router();

Item.get("/", (req, res) => {
  res.render("addition/item");
});

module.exports = Item;
