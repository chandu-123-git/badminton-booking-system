const db = require("../config/db");

exports.createBooking = async (
  user_id,
  court_id,
  booking_date,
  start_time,
  end_time,
  equipment_ids,
  coach_id,
  total_price
) => {
  const query = `
    INSERT INTO bookings 
    (user_id, court_id, booking_date, start_time, end_time, equipment_ids, coach_id, total_price)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await db.query(query, [
    user_id,
    court_id,
    booking_date,
    start_time,
    end_time,
    JSON.stringify(equipment_ids),
    coach_id,
    total_price
  ]);

  return result.insertId;
};
exports.cancelBooking = async (bookingId) => {
  const [result] = await db.query(
    "UPDATE bookings SET status = 'cancelled' WHERE id = ?",
    [bookingId]
  );
  return result;
};
