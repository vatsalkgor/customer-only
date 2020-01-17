const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

const routes = require("./routes");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", routes);
app.listen(3000, () => {
  console.log("server started");
});
