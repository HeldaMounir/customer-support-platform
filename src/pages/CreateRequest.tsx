import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Flag,
  Send,
  Tag,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { addRequest } from "../data/requests";

const createRequestSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),

  category: z
    .string()
    .min(1, "Please select a category"),

  priority: z.enum([
    "low",
    "medium",
    "high",
    "urgent",
  ]),

  description: z
    .string()
    .min(
      20,
      "Description must be at least 20 characters"
    )
    .max(
      1000,
      "Description must be less than 1000 characters"
    ),
});

type CreateRequestFormData = z.infer<
  typeof createRequestSchema
>;

export default function CreateRequest() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateRequestFormData>({
    resolver: zodResolver(createRequestSchema),

    defaultValues: {
      title: "",
      category: "",
      priority: "medium",
      description: "",
    },
  });

const onSubmit = async (
  data: CreateRequestFormData
) => {
  const newRequest = {
    id: `REQ-${crypto.randomUUID()}`,

    title: data.title,

    description: data.description,

    category: data.category,

    priority: data.priority,

    status: "open" as const,

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),
  };

  addRequest(newRequest);

  navigate("/requests");
};

  return (
    <div className="create-request-page">

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

      <div className="create-request-header">

        <div className="create-request-title">

          <div className="create-request-icon">
            <FileText size={21} />
          </div>

          <div>
            <span className="dashboard-eyebrow">
              SUPPORT CENTER
            </span>

            <h1>
              Create a new request
            </h1>

            <p>
              Tell us what you need help with and
              our support team will get back to you.
            </p>
          </div>

        </div>

      </div>

      {/* Form */}

      <form
        className="create-request-layout"
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="create-request-form">

          {/* Title */}

          <div className="form-field">

            <label htmlFor="title">
              Request title
            </label>

            <input
              id="title"
              type="text"
              placeholder="What do you need help with?"
              {...register("title")}
            />

            {errors.title && (
              <span className="field-error">
                {errors.title.message}
              </span>
            )}

          </div>

          {/* Category */}

          <div className="form-field">

            <label htmlFor="category">
              Category
            </label>

            <div className="select-wrapper">
              <Tag size={15} />

              <select
                id="category"
                {...register("category")}
              >
                <option value="">
                  Select a category
                </option>

                <option value="Account">
                  Account
                </option>

                <option value="Billing">
                  Billing
                </option>

                <option value="Technical">
                  Technical
                </option>

                <option value="Orders">
                  Orders
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {errors.category && (
              <span className="field-error">
                {errors.category.message}
              </span>
            )}

          </div>

          {/* Priority */}

          <div className="form-field">

            <label>
              Priority
            </label>

            <div className="priority-options">

              <label className="priority-option">

                <input
                  type="radio"
                  value="low"
                  {...register("priority")}
                />

                <span>
                  <Flag size={13} />
                  Low
                </span>

              </label>

              <label className="priority-option">

                <input
                  type="radio"
                  value="medium"
                  {...register("priority")}
                />

                <span>
                  <Flag size={13} />
                  Medium
                </span>

              </label>

              <label className="priority-option">

                <input
                  type="radio"
                  value="high"
                  {...register("priority")}
                />

                <span>
                  <Flag size={13} />
                  High
                </span>

              </label>

              <label className="priority-option">

                <input
                  type="radio"
                  value="urgent"
                  {...register("priority")}
                />

                <span>
                  <Flag size={13} />
                  Urgent
                </span>

              </label>

            </div>

          </div>

          {/* Description */}

          <div className="form-field">

            <div className="label-row">

              <label htmlFor="description">
                Description
              </label>

              <span>
                Be as specific as possible
              </span>

            </div>

            <textarea
              id="description"
              rows={7}
              placeholder="Describe your issue in detail..."
              {...register("description")}
            />

            {errors.description && (
              <span className="field-error">
                {errors.description.message}
              </span>
            )}

          </div>

          {/* Actions */}

          <div className="form-actions">

            <button
              type="button"
              className="secondary-action"
              onClick={() => navigate("/requests")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-action"
              disabled={isSubmitting}
            >
              <Send size={15} />

              {isSubmitting
                ? "Creating..."
                : "Create request"}
            </button>

          </div>

        </div>

        {/* Side information */}

        <aside className="request-help-card">

          <div className="help-card-icon">
            <CheckCircle2 size={19} />
          </div>

          <h2>
            Before you submit
          </h2>

          <p>
            A clear description helps our support
            team understand your issue faster.
          </p>

          <ul>
            <li>
              Explain what happened
            </li>

            <li>
              Mention any error messages
            </li>

            <li>
              Include relevant details
            </li>

            <li>
              Choose the right priority
            </li>
          </ul>

        </aside>

      </form>

    </div>
  );
}