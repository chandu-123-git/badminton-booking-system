import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>Badminton Booking</h1>
        <div>
          {user && <span className="user-tag">Hi, {user.name}</span>}
          <button onClick={handleLogout} className="btn-small">
            Logout
          </button>
        </div>
      </header>

      <div className="main">
        <nav className="sidebar">
          <Link to="/">Dashboard</Link>
          <Link to="/courts">Courts</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/coaches">Coaches</Link>
          <Link to="/booking">New Booking</Link>
          <Link to="/history">My Bookings</Link>
        </nav>

        <section className="content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Layout;
