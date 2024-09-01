import { Component, inject } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';

import { Job } from './job.model';
import { JobsService } from './jobs-service';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  jobsService = inject(JobsService);
  filterService = inject(FilterService);
  filter = this.filterService.getFilter();
  jobs = this.jobsService.getFilteredJobs(this.filter);
}
