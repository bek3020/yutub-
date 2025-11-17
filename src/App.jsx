// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Video from "./pages/Video";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Login />;
};

const App = () => {
  return (
    <div className="bg-[#212121] min-h-screen">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/video/:id"
            element={
              <ProtectedRoute>
                <Video />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
