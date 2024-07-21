const express = require("express");
const router = express.Router();

//POSTS
router.get("/", (req,res) => {
    res.send("I am posts Index route.")
});

router.get("/:id", (req,res) => {
    res.send("I am posts ID route.")
});

router.post("/", (req,res) => {
    res.send("I am posts Post route.")
});
router.put("/", (req,res) => {
    res.send("I am posts PUT Index route.")
});

module.exports = router;