import { Component, input } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';

import { Job } from './job.model';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  jobs = input.required<Job[]>();
}
