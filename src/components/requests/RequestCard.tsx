import {
  CalendarDays,
  ChevronRight,
  CircleDot,
  Tag,
} from "lucide-react";

import type {
  SupportRequest,
} from "../../data/requests";

type RequestCardProps = {
  request: SupportRequest;
  onClick?: () => void;
};

const statusLabels = {
  open: "Open",
  "in-progress": "In Progress",
  resolved: "Resolved",
  closed: "Closed",
};

const priorityLabels = {
  low: "Low",
  medium: "Medium",
  high: "High",
  urgent: "Urgent",
};

export default function RequestCard({
  request,
  onClick,
}: RequestCardProps) {
  return (
    <button
      type="button"
      className="request-card"
      onClick={onClick}
    >
      <div className="request-card-main">

        <div className="request-card-icon">
          <CircleDot size={18} />
        </div>

        <div className="request-card-content">

          <div className="request-card-title-row">

            <h3>
              {request.title}
            </h3>

            <span className="request-id">
              #{request.id}
            </span>

          </div>

          <p className="request-card-description">
            {request.description}
          </p>

          <div className="request-card-meta">

            <span>
              <Tag size={12} />
              {request.category}
            </span>

            <span>
              <CalendarDays size={12} />
              {new Date(
                request.updatedAt
              ).toLocaleDateString()}
            </span>

          </div>

        </div>

      </div>

      <div className="request-card-side">

        <span
          className={`request-status status-${request.status}`}
        >
          {statusLabels[request.status]}
        </span>

        <span
          className={`request-priority priority-${request.priority}`}
        >
          {priorityLabels[request.priority]}
        </span>

        <ChevronRight
          size={17}
          className="request-card-arrow"
        />

      </div>

    </button>
  );
}