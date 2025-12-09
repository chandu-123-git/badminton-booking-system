const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");

router.get("/", coachController.getAllCoaches);
router.post("/", coachController.addCoach);
router.put("/:id", coachController.updateCoach);
router.delete("/:id", coachController.deleteCoach);

module.exports = router;
