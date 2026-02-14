const express = require("express");
const router = express.Router();
const { classifyWaste } = require("../controllers/wasteController");

router.post("/classify", classifyWaste);

module.exports = router;
