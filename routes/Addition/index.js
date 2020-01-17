const router = require("express").Router();
const Party = require("./party");
const Group = require("./group");
const Item = require("./item");

router.use("/Party", Party);
router.use("/Group", Group);
router.use("/Item", Item);

module.exports = router;
