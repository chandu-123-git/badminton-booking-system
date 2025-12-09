const bookingModel = require("../models/bookingModel");
const db = require("../config/db");

// Create booking
exports.book = async (req, res) => {
  try {
    const {
      user_id,
      court_id,
      booking_date,
      start_time,
      end_time,
      equipment_ids,
      coach_id,
      total_price
    } = req.body;

    const bookingId = await bookingModel.createBooking(
      user_id,
      court_id,
      booking_date,
      start_time,
      end_time,
      equipment_ids,
      coach_id,
      total_price
    );

    res.status(201).json({
      message: "Booking successful",
      booking_id: bookingId
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Cancel booking
exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    const result = await bookingModel.cancelBooking(bookingId);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking canceled successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user's booking history
exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.query(
      "SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    res.json({
      message: "Booking history fetched successfully",
      history: rows
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
