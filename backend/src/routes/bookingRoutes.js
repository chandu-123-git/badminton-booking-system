const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/book", bookingController.book);
router.get("/history/:userId", bookingController.getHistory);
router.put("/cancel/:bookingId", bookingController.cancelBooking);


module.exports = router;
