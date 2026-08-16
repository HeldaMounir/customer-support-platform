import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* Protected Routes */}

      <Route element={<ProtectedRoute />}>

        <Route element={<AppLayout />}>

          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Route>

      </Route>

    </Routes>
  );
}

export default App;