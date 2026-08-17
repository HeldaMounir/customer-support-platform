import {
  ArrowLeft,
  CalendarDays,
  CircleDot,
  Clock3,
  Tag,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import { requests } from "../data/requests";

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const request = requests.find(
    (request) => request.id === id
  );

  if (!request) {
    return (
      <div className="request-not-found">
        <h1>Request not found</h1>

        <p>
          The request you are looking for does not exist.
        </p>

        <button
          type="button"
          onClick={() => navigate("/requests")}
        >
          <ArrowLeft size={15} />
          Back to requests
        </button>
      </div>
    );
  }

  return (
    <div className="request-details-page">

      {/* Back */}

      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/requests")}
      >
        <ArrowLeft size={15} />
        Back to requests
      </button>

      {/* Header */}

      <div className="details-header">

        <div className="details-title-wrapper">

          <div className="details-icon">
            <CircleDot size={20} />
          </div>

          <div>

            <span className="details-request-id">
              #{request.id}
            </span>

            <h1>
              {request.title}
            </h1>

          </div>

        </div>

        <div className="details-badges">

          <span
            className={`request-status status-${request.status}`}
          >
            {request.status === "in-progress"
              ? "In Progress"
              : request.status.charAt(0).toUpperCase() +
                request.status.slice(1)}
          </span>

          <span
            className={`request-priority priority-${request.priority}`}
          >
            {request.priority.charAt(0).toUpperCase() +
              request.priority.slice(1)}
          </span>

        </div>

      </div>

      {/* Request Information */}

      <div className="details-grid">

        <main className="details-main">

          <section className="details-card">

            <div className="details-card-header">
              <h2>
                Description
              </h2>
            </div>

            <p className="details-description">
              {request.description}
            </p>

          </section>

          {/* Activity */}

          <section className="details-card">

            <div className="details-card-header">

              <div>
                <h2>
                  Activity
                </h2>

                <p>
                  Latest updates on this request
                </p>
              </div>

            </div>

            <div className="activity-list">

              <div className="activity-item">

                <div className="activity-dot" />

                <div className="activity-content">

                  <strong>
                    Request created
                  </strong>

                  <span>
                    Your support request was created.
                  </span>

                  <small>
                    {new Date(
                      request.createdAt
                    ).toLocaleString()}
                  </small>

                </div>

              </div>

              <div className="activity-item">

                <div className="activity-dot" />

                <div className="activity-content">

                  <strong>
                    Request updated
                  </strong>

                  <span>
                    Your request was reviewed by
                    the support team.
                  </span>

                  <small>
                    {new Date(
                      request.updatedAt
                    ).toLocaleString()}
                  </small>

                </div>

              </div>

            </div>

          </section>

        </main>

        {/* Sidebar */}

        <aside className="details-sidebar">

          <div className="details-card">

            <h2>
              Request information
            </h2>

            <div className="info-list">

              <div className="info-row">

                <span>
                  <Tag size={14} />
                  Category
                </span>

                <strong>
                  {request.category}
                </strong>

              </div>

              <div className="info-row">

                <span>
                  <Clock3 size={14} />
                  Status
                </span>

                <strong>
                  {request.status === "in-progress"
                    ? "In Progress"
                    : request.status}
                </strong>

              </div>

              <div className="info-row">

                <span>
                  <CalendarDays size={14} />
                  Created
                </span>

                <strong>
                  {new Date(
                    request.createdAt
                  ).toLocaleDateString()}
                </strong>

              </div>

              <div className="info-row">

                <span>
                  <CalendarDays size={14} />
                  Updated
                </span>

                <strong>
                  {new Date(
                    request.updatedAt
                  ).toLocaleDateString()}
                </strong>

              </div>

            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}