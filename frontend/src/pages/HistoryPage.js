import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getHistory } from "../api/bookingApi";

const HistoryPage = () => {
  const { user, token } = useAuth();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      try {
        const data = await getHistory(user.id, token);
        setItems(data.history || []);
      } catch (err) {
        setError("Failed to load history");
      }
    };
    load();
  }, [user, token]);

  return (
    <div>
      <h2>My Bookings</h2>
      {error && <p className="error-text">{error}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Total Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.booking_date}</td>
              <td>{b.time_slot || `${b.start_time} - ${b.end_time}`}</td>
              <td>{b.total_price}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
