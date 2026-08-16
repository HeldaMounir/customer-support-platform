import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">

      <div className="mobile-page-title">
        Overview
      </div>

      <div className="topbar-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search anything..."
        />

        <span className="search-shortcut">
          ⌘ K
        </span>

      </div>

      <div className="topbar-actions">

        <button className="notification-button">
          <Bell size={19} />

          <span className="notification-dot" />
        </button>

        <div className="topbar-divider" />

        <button className="user-menu">

          <div className="avatar">
            HM
          </div>

          <div className="user-info">
            <strong>Helda Mounir</strong>
            <span>Customer</span>
          </div>

          <ChevronDown size={16} />

        </button>

      </div>

    </header>
  );
}