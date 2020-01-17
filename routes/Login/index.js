const Login = require("express").Router();
const db = require("../../db");

Login.post("/", (req, res, next) => {
  if (req.session.username) {
    return res.redirect("/Dashboard");
  }
  next();
});
Login.post("/", (req, res) => {
  db.get(
    "select * from login where username=? and password=?",
    [req.body.username, req.body.password],
    (err, row) => {
      if (err || row === undefined) {
        res.render("index", { err: "Invalid username or password." });
      }
      res.redirect("/Dashboard");
    }
  );
});

const Logout = require("express").Router();
Logout.get("/", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = { Login, Logout };
