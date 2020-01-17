const express = require("express");
const router = express.Router();
const { Login, Logout } = require("./Login");
const dashboard = require("./Dashboard");
const Addition = require("./Addition");

router.get("/", (req, res) => {
  if (req.session.username) {
    res.render("dashboard");
  } else {
    console.log("no sesssion");
  }
  res.render("index");
});
router.use("/Login", Login);
router.use("/Dashboard", dashboard);
router.use("/Logout", Logout);
router.use("/Addition", Addition);

module.exports = router;
