const Group = require("express").Router();

Group.get("/", (req, res) => {
  res.render("addition/group");
});

module.exports = Group;
