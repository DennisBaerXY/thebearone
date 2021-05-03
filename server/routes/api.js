var express = require("express");
var router = express.Router();
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.get("/", (req, res) => {
  res.json({
    wasser: "wasser",
  });
});

module.exports = router;
