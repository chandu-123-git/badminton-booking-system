import React, { useEffect, useState } from "react";
import { getCourts } from "../api/courtsApi";

const CourtsPage = () => {
  const [courts, setCourts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCourts();
        setCourts(data);
      } catch (err) {
        setError("Failed to load courts");
      }
    };
    load();
  }, []);

  return (
    <div>
      <h2>Courts</h2>
      {error && <p className="error-text">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {courts.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.type}</td>
              <td>{c.is_active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourtsPage;
