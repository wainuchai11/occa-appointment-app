// App.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
          <Route
            path="/home"
            element={user ? <HomePage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
