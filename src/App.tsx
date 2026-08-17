import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import RequestDetails from "./pages/RequestDetails";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Requests from "./pages/Requests";

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
  path="/requests"
  element={<Requests />}
/>
<Route
  path="/requests/:id"
  element={<RequestDetails />}
/>

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