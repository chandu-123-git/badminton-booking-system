const express = require("express");
const router = express.Router();
const controller = require("../controllers/courtController");

router.get("/", controller.getCourts);
router.post("/", controller.addCourt);
router.put("/:id", controller.updateCourt);
router.delete("/:id", controller.disableCourt);

module.exports = router;
