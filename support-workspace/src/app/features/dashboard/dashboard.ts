import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stat {
  label: string;
  value: number;
  change: string;
  tone: 'purple' | 'orange' | 'blue' | 'green';
}

interface RequestItem {
  id: string;
  title: string;
  customer: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  time: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  stats: Stat[] = [
    {
      label: 'Total Requests',
      value: 128,
      change: '+12.5%',
      tone: 'purple',
    },
    {
      label: 'Open Requests',
      value: 24,
      change: '+4.2%',
      tone: 'orange',
    },
    {
      label: 'In Progress',
      value: 37,
      change: '+8.1%',
      tone: 'blue',
    },
    {
      label: 'Resolved',
      value: 67,
      change: '+15.4%',
      tone: 'green',
    },
  ];

  requests: RequestItem[] = [
    {
      id: 'REQ-1048',
      title: 'Unable to update my profile',
      customer: 'Maya Hassan',
      status: 'In Progress',
      priority: 'High',
      time: '12 min ago',
    },
    {
      id: 'REQ-1047',
      title: 'Payment was charged twice',
      customer: 'Omar Adel',
      status: 'Open',
      priority: 'Urgent',
      time: '28 min ago',
    },
    {
      id: 'REQ-1046',
      title: 'Cannot reset my password',
      customer: 'Sara Nabil',
      status: 'In Progress',
      priority: 'Medium',
      time: '42 min ago',
    },
    {
      id: 'REQ-1045',
      title: 'Order delivery information',
      customer: 'Karim Samir',
      status: 'Resolved',
      priority: 'Low',
      time: '1 hr ago',
    },
    {
      id: 'REQ-1044',
      title: 'App keeps logging me out',
      customer: 'Nour Ali',
      status: 'Open',
      priority: 'High',
      time: '2 hrs ago',
    },
  ];
}