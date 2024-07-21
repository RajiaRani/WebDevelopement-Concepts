const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("I am user Index route.")
});

router.get("/:id", (req,res) => {
    res.send("I am user ID route.")
});

router.post("/new", (req,res) => {
    res.send("I am user Postroute.")
});
router.put("/", (req,res) => {
    res.send("I am PUT Index route.")
});

module.exports = router;
