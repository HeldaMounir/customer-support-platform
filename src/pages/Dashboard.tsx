import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  Plus,
  RefreshCw,
  Ticket,
} from "lucide-react";
import { requests } from "../data/requests";

import StatCard from "../components/dashboard/StatCard";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const openRequests = requests.filter(
  (request) => request.status === "open"
).length;

const inProgressRequests = requests.filter(
  (request) => request.status === "in-progress"
).length;

const resolvedRequests = requests.filter(
  (request) => request.status === "resolved"
).length;

const totalRequests = requests.length;

  return (
    <div className="dashboard-page">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <span className="dashboard-eyebrow">
            CUSTOMER PORTAL
          </span>

          <h1>
            Good morning, {user?.name?.split(" ")[0]} 👋
          </h1>

          <p>
            Here's what's happening with your support
            requests.
          </p>
        </div>

        <button className="primary-action">
          <Plus size={17} />
          New request
        </button>

      </div>

      {/* Stats */}

      <div className="stats-grid">

        <StatCard
          title="Open Requests"
          value={openRequests}
          description="Currently waiting for support"
          icon={Ticket}
         
        />

        <StatCard
          title="In Progress"
          value={inProgressRequests}
          description="Being handled by our team"
          icon={Clock3}
        />

        <StatCard
          title="Resolved"
         value={resolvedRequests}
          description="Successfully resolved"
          icon={CheckCircle2}
          
        />

        <StatCard
          title="Total Requests"
          value={totalRequests}
          description="All your support requests"
          icon={FileText}
        />

      </div>

    

      <div className="dashboard-content-grid">

      

        <section className="dashboard-section">

          <div className="section-header">

            <div>
              <h2>Recent requests</h2>

              <p>
                Your latest support activity
              </p>
            </div>

            <button className="text-action">
              View all
              <ArrowUpRight size={14} />
            </button>

          </div>
<div className="requests-preview">

  {requests.slice(0, 3).map((request) => (

    <div
      className="request-preview-card"
      key={request.id}
    >

      <div className="request-icon">
        <RefreshCw size={16} />
      </div>

      <div className="request-info">

        <strong>
          {request.title}
        </strong>

        <span>
          #{request.id} · Updated{" "}
          {new Date(
            request.updatedAt
          ).toLocaleDateString()}
        </span>

      </div>

      <span
        className={`status-badge status-${request.status}`}
      >
        {request.status === "in-progress"
          ? "In Progress"
          : request.status.charAt(0).toUpperCase() +
            request.status.slice(1)}
      </span>

    </div>

  ))}

</div>
          

          

        </section>

      

        <section className="quick-action-card">

          <div className="quick-action-icon">
            <Ticket size={20} />
          </div>

          <h2>
            Need help?
          </h2>

          <p>
            Create a new support request and our
            team will get back to you.
          </p>

          <button className="quick-action-button">
            Create request
            <ArrowUpRight size={15} />
          </button>

        </section>

      </div>

    </div>
  );
}