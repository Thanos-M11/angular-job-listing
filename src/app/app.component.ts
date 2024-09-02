import { Component, DoCheck, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { JobListComponent } from './job-list/job-list.component';
import { FooterComponent } from './footer/footer.component';
import { FilterService } from './filter/filter.service';
import { JobsService } from './job-list/jobs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FilterComponent,
    JobListComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  filterService = inject(FilterService);
  jobService = inject(JobsService);
  currentFilter = this.filterService.getFilter();
  isFilterEmpty = this.filterService.isEmpty();
  currentJobs = this.jobService.getFilteredJobs(this.currentFilter);

  ngDoCheck() {
    this.currentFilter = this.filterService.getFilter();
    this.isFilterEmpty = this.filterService.isEmpty();
    this.currentJobs = this.jobService.getFilteredJobs(this.currentFilter);
  }
}
