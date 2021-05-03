var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dbAdmin:Ritter1209@cluster0.0lhuy.mongodb.net/theBearOne?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

router.get("/", (req, res) => {
  res.json({
    wasser: "wasser",
  });
});

module.exports = router;
