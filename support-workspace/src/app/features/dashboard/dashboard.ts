import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  requests,
  SupportRequest,
} from '../../data/requests';

type StatTone =
  | 'purple'
  | 'orange'
  | 'blue'
  | 'green';

type DashboardStat = {
  label: string;
  value: number;
  change: string;
  tone: StatTone;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  requests = requests;




  get stats(): DashboardStat[] {

    return [
      {
        label: 'Total requests',
        value: requests.length,
        change: 'All requests',
        tone: 'purple',
      },

      {
        label: 'Open requests',
        value: requests.filter(
          request => request.status === 'open'
        ).length,
        change: 'Needs attention',
        tone: 'orange',
      },

      {
        label: 'In progress',
        value: requests.filter(
          request => request.status === 'in-progress'
        ).length,
        change: 'Currently working',
        tone: 'blue',
      },

      {
        label: 'Resolved',
        value: requests.filter(
          request => request.status === 'resolved'
        ).length,
        change: 'Successfully resolved',
        tone: 'green',
      },
    ];
  }


  

  get recentRequests(): SupportRequest[] {

    return requests.slice(0, 5);

  }



  getStatusLabel(
    status: SupportRequest['status']
  ): string {

    const labels: Record<
      SupportRequest['status'],
      string
    > = {
      open: 'Open',
      'in-progress': 'In Progress',
      resolved: 'Resolved',
      closed: 'Closed',
    };

    return labels[status];
  }


  getPriorityLabel(
    priority: SupportRequest['priority']
  ): string {

    const labels: Record<
      SupportRequest['priority'],
      string
    > = {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      urgent: 'Urgent',
    };

    return labels[priority];
  }




  getCustomerName(
    request: SupportRequest
  ): string {

    return 'Customer';

  }



  getRequestTime(
    request: SupportRequest
  ): string {

    return this.formatRelativeDate(
      request.updatedAt
    );

  }


  private formatRelativeDate(
    date: string
  ): string {

    const requestDate =
      new Date(date);

    const now =
      new Date();

    const difference =
      now.getTime() -
      requestDate.getTime();

    const minutes =
      Math.floor(
        difference / (1000 * 60)
      );

    if (minutes < 1) {
      return 'Just now';
    }

    if (minutes < 60) {
      return `${minutes}m ago`;
    }

    const hours =
      Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours}h ago`;
    }

    const days =
      Math.floor(hours / 24);

    if (days === 1) {
      return 'Yesterday';
    }

    return `${days}d ago`;
  }
}