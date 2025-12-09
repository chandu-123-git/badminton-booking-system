import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CourtsPage from "./pages/CourtsPage";
import EquipmentPage from "./pages/EquipmentPage";
import CoachesPage from "./pages/CoachesPage";
import BookingPage from "./pages/BookingPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes under Layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="courts" element={<CourtsPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="coaches" element={<CoachesPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="history" element={<HistoryPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
