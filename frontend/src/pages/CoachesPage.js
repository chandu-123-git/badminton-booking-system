import React, { useEffect, useState } from "react";
import { getCoaches } from "../api/coachesApi";

const CoachesPage = () => {
  const [coaches, setCoaches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCoaches();
        setCoaches(data);
      } catch (err) {
        setError("Failed to load coaches");
      }
    };
    load();
  }, []);

  return (
    <div>
      <h2>Coaches</h2>
      {error && <p className="error-text">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Price / hr</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.specialty}</td>
              <td>{c.price_per_hour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoachesPage;
