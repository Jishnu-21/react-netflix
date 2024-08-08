import React from 'react';
import { Navbar } from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchPage from "./pages/SearchPage"; // Import the SearchPage component
import GuardRoute from "./components/GuardRoute"

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
        <Route path="/login" element={<GuardRoute><Login /></GuardRoute>} />
          <Route path="/signup" element={<GuardRoute><SignUp /></GuardRoute>} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/search" element={<SearchPage />} /> 
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
