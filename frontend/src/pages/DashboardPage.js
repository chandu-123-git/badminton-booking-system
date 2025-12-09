import React from "react";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Badminton Court Booking System.</p>
      {user && (
        <p>
          Logged in as <strong>{user.name}</strong> ({user.role})
        </p>
      )}

      <ul className="bullet-list">
        <li>View courts and availability</li>
        <li>Rent equipment</li>
        <li>Optionally book a coach</li>
        <li>See your booking history</li>
      </ul>
    </div>
  );
};

export default DashboardPage;
