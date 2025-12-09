import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createBooking } from "../api/bookingApi";

const BookingPage = () => {
  const { user, token } = useAuth();

  const [form, setForm] = useState({
    court_id: "",
    booking_date: "",
    start_time: "",
    end_time: "",
    equipment_ids: "",
    coach_id: "",
    total_price: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Convert comma separated equipment to array of numbers
    const equipmentIds =
      form.equipment_ids.trim() === ""
        ? []
        : form.equipment_ids.split(",").map((id) => Number(id.trim()));

    const payload = {
      user_id: user?.id,
      court_id: Number(form.court_id),
      booking_date: form.booking_date,
      start_time: form.start_time,
      end_time: form.end_time,
      equipment_ids: equipmentIds,
      coach_id: form.coach_id ? Number(form.coach_id) : null,
      total_price: Number(form.total_price || 0),
    };

    try {
      const data = await createBooking(payload, token);
      setMessage(`Booking created (id: ${data.booking_id})`);
    } catch (err) {
      setError("Failed to create booking");
    }
  };

  return (
    <div>
      <h2>Create Booking</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Court ID
          <input
            name="court_id"
            value={form.court_id}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date
          <input
            type="date"
            name="booking_date"
            value={form.booking_date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Start Time
          <input
            type="time"
            name="start_time"
            value={form.start_time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          End Time
          <input
            type="time"
            name="end_time"
            value={form.end_time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Equipment IDs (comma separated)
          <input
            name="equipment_ids"
            value={form.equipment_ids}
            onChange={handleChange}
          />
        </label>

        <label>
          Coach ID (optional)
          <input
            name="coach_id"
            value={form.coach_id}
            onChange={handleChange}
          />
        </label>

        <label>
          Total Price
          <input
            name="total_price"
            value={form.total_price}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Booking</button>
      </form>

      {message && <p className="success-text">{message}</p>}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default BookingPage;
