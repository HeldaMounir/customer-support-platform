export type RequestStatus =
  | "open"
  | "in-progress"
  | "resolved"
  | "closed";

export type RequestPriority =
  | "low"
  | "medium"
  | "high"
  | "urgent";

export type SupportRequest = {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  priority: RequestPriority;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export const requests: SupportRequest[] = [
  {
    id: "REQ-1048",
    title: "Unable to update my profile",
    description:
      "I am unable to save the changes made to my profile.",
    status: "in-progress",
    priority: "high",
    category: "Account",
    createdAt: "2026-08-15T09:30:00",
    updatedAt: "2026-08-17T09:20:00",
  },

  {
    id: "REQ-1045",
    title: "Question about billing",
    description:
      "I have a question about my latest billing statement.",
    status: "open",
    priority: "medium",
    category: "Billing",
    createdAt: "2026-08-16T11:15:00",
    updatedAt: "2026-08-17T07:30:00",
  },

  {
    id: "REQ-1039",
    title: "Account verification issue",
    description:
      "My account verification has not been completed yet.",
    status: "resolved",
    priority: "high",
    category: "Account",
    createdAt: "2026-08-12T14:00:00",
    updatedAt: "2026-08-16T16:45:00",
  },

  {
    id: "REQ-1035",
    title: "Cannot access my dashboard",
    description:
      "The dashboard keeps loading without showing any data.",
    status: "open",
    priority: "urgent",
    category: "Technical",
    createdAt: "2026-08-11T10:20:00",
    updatedAt: "2026-08-15T12:10:00",
  },

  {
    id: "REQ-1029",
    title: "Change account email",
    description:
      "I would like to update the email associated with my account.",
    status: "closed",
    priority: "low",
    category: "Account",
    createdAt: "2026-08-08T08:45:00",
    updatedAt: "2026-08-12T13:30:00",
  },

  {
    id: "REQ-1024",
    title: "Payment failed",
    description:
      "My payment was declined even though the card is active.",
    status: "resolved",
    priority: "urgent",
    category: "Billing",
    createdAt: "2026-08-05T15:20:00",
    updatedAt: "2026-08-10T09:15:00",
  },

  {
    id: "REQ-1018",
    title: "Notification settings",
    description:
      "I am not receiving email notifications for my requests.",
    status: "in-progress",
    priority: "medium",
    category: "Technical",
    createdAt: "2026-08-04T12:00:00",
    updatedAt: "2026-08-09T17:20:00",
  },

  {
    id: "REQ-1012",
    title: "Request account information",
    description:
      "I need help finding some information about my account.",
    status: "closed",
    priority: "low",
    category: "General",
    createdAt: "2026-08-01T09:00:00",
    updatedAt: "2026-08-05T11:40:00",
  },
];