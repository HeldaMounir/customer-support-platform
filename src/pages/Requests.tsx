import {
  Filter,
  Search,
  SlidersHorizontal,
  Plus,
  X,
} from "lucide-react";

import { useMemo, useState } from "react";

import RequestCard from "../components/requests/RequestCard";
import { requests } from "../data/requests";
import { useNavigate } from "react-router-dom";

type StatusFilter =
  | "all"
  | "open"
  | "in-progress"
  | "resolved"
  | "closed";

type PriorityFilter =
  | "all"
  | "low"
  | "medium"
  | "high"
  | "urgent";

export default function Requests() {
  const [search, setSearch] = useState("");
const navigate = useNavigate();
  const [status, setStatus] =
    useState<StatusFilter>("all");

  const [priority, setPriority] =
    useState<PriorityFilter>("all");

  const [showFilters, setShowFilters] =
    useState(false);

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {

      const searchValue =
        search.toLowerCase().trim();

      const matchesSearch =
        request.title
          .toLowerCase()
          .includes(searchValue) ||
        request.description
          .toLowerCase()
          .includes(searchValue) ||
        request.id
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        status === "all" ||
        request.status === status;

      const matchesPriority =
        priority === "all" ||
        request.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [search, status, priority]);

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setPriority("all");
  };

  const hasActiveFilters =
    search !== "" ||
    status !== "all" ||
    priority !== "all";

  return (
    <div className="requests-page">

      {/* Header */}

      <div className="requests-header">

        <div>
          <span className="dashboard-eyebrow">
            SUPPORT CENTER
          </span>

          <h1>
            My Requests
          </h1>

          <p>
            View and manage all your support requests
            in one place.
          </p>
        </div>

        <button className="primary-action">
          <Plus size={17} />
          New request
        </button>

      </div>

      {/* Toolbar */}

      <div className="requests-toolbar">

        <div className="request-search">

          <Search size={16} />

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
            >
              <X size={14} />
            </button>
          )}

        </div>

        <button
          type="button"
          className={`filter-toggle ${
            showFilters
              ? "filter-toggle-active"
              : ""
          }`}
          onClick={() =>
            setShowFilters(!showFilters)
          }
        >
          <SlidersHorizontal size={15} />

          Filters

          <Filter size={13} />
        </button>

      </div>

      {/* Filters */}

      {showFilters && (
        <div className="filters-panel">

          <div className="filter-group">

            <label>
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target
                    .value as StatusFilter
                )
              }
            >
              <option value="all">
                All statuses
              </option>

              <option value="open">
                Open
              </option>

              <option value="in-progress">
                In Progress
              </option>

              <option value="resolved">
                Resolved
              </option>

              <option value="closed">
                Closed
              </option>
            </select>

          </div>

          <div className="filter-group">

            <label>
              Priority
            </label>

            <select
              value={priority}
              onChange={(event) =>
                setPriority(
                  event.target
                    .value as PriorityFilter
                )
              }
            >
              <option value="all">
                All priorities
              </option>

              <option value="low">
                Low
              </option>

              <option value="medium">
                Medium
              </option>

              <option value="high">
                High
              </option>

              <option value="urgent">
                Urgent
              </option>

            </select>

          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="clear-filters"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}

        </div>
      )}

      {/* Results */}

      <div className="requests-results-header">

        <div>
          <strong>
            {filteredRequests.length}
          </strong>

          <span>
            {filteredRequests.length === 1
              ? " request"
              : " requests"}
          </span>
        </div>

        {hasActiveFilters && (
          <span className="filtered-label">
            Filtered results
          </span>
        )}

      </div>

      {/* Request List */}

      {filteredRequests.length > 0 ? (
        <div className="requests-list">

          {filteredRequests.map((request) => (
           <RequestCard
  key={request.id}
  request={request}
  onClick={() =>
    navigate(`/requests/${request.id}`)
  }
/>
          ))}

        </div>
      ) : (
        <div className="requests-empty">

          <div className="empty-icon">
            <Search size={22} />
          </div>

          <h2>
            No requests found
          </h2>

          <p>
            Try changing your search or filters
            to find what you're looking for.
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}

        </div>
      )}

    </div>
  );
}