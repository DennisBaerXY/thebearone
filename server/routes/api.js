var express = require("express");
var router = express.Router();
require("dotenv").config();

const pool = require("../db");

router.get("/guestbook/entries", async (req, res) => {
  try {
    const ergebnis = await pool.query("select * from guestbook");
    res.json(ergebnis.rows);
  } catch (error) {
    console.log("Database Get Error: ", error);
    res.status(401).json({
      error: "Error occured from reading Database",
    });
  }
});

router.post("/guestbook/entries", async (req, res) => {
  try {
    let data = req.body;
    let newEntry;

    data.date = new Date().toISOString();
    try {
      newEntry = await pool.query(
        "insert into guestbook (name,date,entry) values ($1, $2,$3) returning *",
        [data.name, data.date, data.entry]
      );
    } catch (error) {
      console.log("Database Error:", error);
    }

    req.app.io.emit("newEntry", newEntry.rows[0]);
    res.status(200).json({ status: "Posted!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.delete("/guestbook/entries", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    const delelteEntry = await pool.query("delete from guestbook where id=$1", [
      data.id,
    ]);
    res.status(200).json({ status: "deleted" });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});
module.exports = router;
