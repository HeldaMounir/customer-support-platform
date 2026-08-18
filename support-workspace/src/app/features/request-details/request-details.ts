import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  RequestPriority,
  RequestStatus,
  SupportRequest,
  requests,
} from '../../data/requests';

@Component({
  selector: 'app-request-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './request-details.html',
  styleUrl: './request-details.scss',
})
export class RequestDetails {

  private route = inject(ActivatedRoute);
  private location = inject(Location);

  request: SupportRequest | undefined;


  constructor() {

    const requestId =
      this.route.snapshot.paramMap.get('id');

    this.request = requests.find(
      (item) => item.id === requestId
    );
  }


  goBack(): void {
    this.location.back();
  }


  getStatusLabel(
    status: RequestStatus
  ): string {

    const labels: Record<
      RequestStatus,
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
    priority: RequestPriority
  ): string {

    const labels: Record<
      RequestPriority,
      string
    > = {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      urgent: 'Urgent',
    };

    return labels[priority];
  }


  formatDate(date: string): string {

    return new Intl.DateTimeFormat(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }
    ).format(new Date(date));
  }
}