import React, { useEffect, useState } from "react";
import { getEquipment } from "../api/equipmentApi";

const EquipmentPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getEquipment();
        setItems(data);
      } catch (err) {
        setError("Failed to load equipment");
      }
    };
    load();
  }, []);

  return (
    <div>
      <h2>Equipment</h2>
      {error && <p className="error-text">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Available</th>
            <th>Price / hr</th>
          </tr>
        </thead>
        <tbody>
          {items.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td>{e.available_quantity}</td>
              <td>{e.price_per_hour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentPage;
