import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Plus,
  Sparkles,
  Ticket,
  TrendingUp,
} from "lucide-react";

const requests = [
  {
    id: "#REQ-1042",
    title: "Unable to access my account",
    category: "Account",
    status: "In Progress",
    priority: "High",
    date: "Today",
  },
  {
    id: "#REQ-1038",
    title: "Payment confirmation issue",
    category: "Billing",
    status: "Waiting",
    priority: "Medium",
    date: "Yesterday",
  },
  {
    id: "#REQ-1029",
    title: "Update account information",
    category: "Profile",
    status: "Resolved",
    priority: "Low",
    date: "Aug 12",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Decorative Background */}
      <div className="background-blur blur-one" />
      <div className="background-blur blur-two" />

      {/* Hero */}
      <section className="hero-section">

        <div className="hero-content">
          <div className="welcome-badge">
            <Sparkles size={14} />
            Customer workspace
          </div>

          <h1>
            Hey Helda,
            <br />
            <span>how can we help?</span>
          </h1>

          <p>
            Everything you need to manage your support requests,
            communicate with our team, and stay updated.
          </p>

          <button className="hero-button">
            <Plus size={18} />
            Create a request
          </button>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-one">
            <CheckCircle2 size={20} />
            <div>
              <strong>12</strong>
              <span>Resolved</span>
            </div>
          </div>

          <div className="floating-card card-two">
            <MessageCircle size={20} />
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>

          <div className="hero-circle">
            <Ticket size={55} />
          </div>
        </div>

      </section>

      {/* Stats */}
      <section className="stats-grid">

        <div className="modern-stat-card">
          <div className="stat-icon purple">
            <Ticket size={21} />
          </div>

          <div className="stat-content">
            <span>Open requests</span>
            <strong>04</strong>
          </div>

          <div className="stat-trend positive">
            <TrendingUp size={14} />
            12%
          </div>
        </div>

        <div className="modern-stat-card">
          <div className="stat-icon orange">
            <Clock3 size={21} />
          </div>

          <div className="stat-content">
            <span>In progress</span>
            <strong>02</strong>
          </div>

          <div className="stat-label">
            Active
          </div>
        </div>

        <div className="modern-stat-card">
          <div className="stat-icon green">
            <CheckCircle2 size={21} />
          </div>

          <div className="stat-content">
            <span>Resolved</span>
            <strong>12</strong>
          </div>

          <div className="stat-trend positive">
            <TrendingUp size={14} />
            24%
          </div>
        </div>

      </section>

      {/* Requests */}
      <section className="requests-section">

        <div className="section-heading">
          <div>
            <span className="section-label">
              YOUR ACTIVITY
            </span>

            <h2>Recent requests</h2>

            <p>
              Keep track of your latest conversations.
            </p>
          </div>

          <button className="view-all">
            View all
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="requests-list">

          {requests.map((request) => (
            <div
              className="request-card"
              key={request.id}
            >
              <div className="request-main">

                <div className="request-icon">
                  <Ticket size={19} />
                </div>

                <div className="request-info">
                  <span className="request-id">
                    {request.id}
                  </span>

                  <h3>
                    {request.title}
                  </h3>

                  <div className="request-meta">
                    <span>{request.category}</span>
                    <span className="dot">•</span>
                    <span>{request.date}</span>
                  </div>
                </div>

              </div>

              <div className="request-right">

                <span
                  className={`priority ${request.priority.toLowerCase()}`}
                >
                  {request.priority}
                </span>

                <span
                  className={`status ${request.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <span className="status-dot" />
                  {request.status}
                </span>

                <ArrowUpRight
                  className="request-arrow"
                  size={19}
                />

              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}