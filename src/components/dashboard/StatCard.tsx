import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  trend?: string;
};

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatCardProps) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <div className="stat-icon">
          <Icon size={18} />
        </div>

        {trend && (
          <span className="stat-trend">
            {trend}
          </span>
        )}

      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-title">
        {title}
      </div>

      <p className="stat-description">
        {description}
      </p>

    </div>
  );
}