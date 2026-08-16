import { NavLink } from "react-router-dom";
import {
  BarChart3,
  CircleHelp,
  LayoutDashboard,
  LogOut,
  Settings,
  Ticket,
  User,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Requests",
    path: "/requests",
    icon: Ticket,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">

        <div className="brand-mark">
          <BarChart3 size={21} />
        </div>

        <div className="brand-text">
          <strong>Supportly</strong>
          <span>Customer Care</span>
        </div>

      </div>

      <div className="nav-section">

        <span className="nav-title">
          WORKSPACE
        </span>

        <nav className="sidebar-nav">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>

                {item.name === "My Requests" && (
                  <span className="nav-count">
                    4
                  </span>
                )}
              </NavLink>
            );
          })}

        </nav>

      </div>

      <div className="nav-section secondary">

        <span className="nav-title">
          ACCOUNT
        </span>

        <button className="nav-item static-item">
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <button className="nav-item static-item">
          <CircleHelp size={19} />
          <span>Help center</span>
        </button>

      </div>

      <div className="sidebar-bottom">

        <div className="support-card">

          <div className="support-icon">
            <CircleHelp size={18} />
          </div>

          <div>
            <strong>Need help?</strong>
            <span>Talk to our team</span>
          </div>

        </div>

        <button className="logout-button">
          <LogOut size={18} />
          <span>Sign out</span>
        </button>

      </div>

    </aside>
  );
}