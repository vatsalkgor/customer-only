const Dashboard = require("express").Router();

Dashboard.get("/", (req, res, next) => {
  res.render("dashboard");
});

module.exports = Dashboard;
