const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
    res.send("GET Todo");
});

module.exports = router;