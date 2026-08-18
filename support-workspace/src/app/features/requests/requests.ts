import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  RequestPriority,
  RequestStatus,
  SupportRequest,
  requests,
} from '../../data/requests';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './requests.html',
  styleUrl: './requests.scss',
})
export class Requests {

  searchTerm = '';

  selectedStatus: 'all' | RequestStatus = 'all';

  selectedPriority: 'all' | RequestPriority = 'all';


  get filteredRequests(): SupportRequest[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return requests.filter((request) => {

      const matchesSearch =
        !search ||
        request.id.toLowerCase().includes(search) ||
        request.title.toLowerCase().includes(search) ||
        request.description.toLowerCase().includes(search) ||
        request.category.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'all' ||
        request.status === this.selectedStatus;

      const matchesPriority =
        this.selectedPriority === 'all' ||
        request.priority === this.selectedPriority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }


  get totalRequests(): number {
    return requests.length;
  }


  get openRequests(): number {
    return requests.filter(
      (request) => request.status === 'open'
    ).length;
  }


  get inProgressRequests(): number {
    return requests.filter(
      (request) => request.status === 'in-progress'
    ).length;
  }


  get resolvedRequests(): number {
    return requests.filter(
      (request) => request.status === 'resolved'
    ).length;
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
      }
    ).format(new Date(date));
  }


  clearFilters(): void {

    this.searchTerm = '';

    this.selectedStatus = 'all';

    this.selectedPriority = 'all';
  }
}