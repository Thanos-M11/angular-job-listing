import { ButtonService } from './button/button.service';
import { Component, inject, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  filterService = inject(FilterService);
  jobService = inject(JobsService);
  buttonService = inject(ButtonService);

  currentFilter = this.filterService.getFilter();
  isFilterEmpty = this.filterService.isEmpty();
  currentJobs = this.jobService.getFilteredJobs(this.currentFilter);

  ngOnInit(): void {
    this.filterService.filter$.subscribe((filter) => {
      this.currentFilter = filter;
      this.isFilterEmpty = this.filterService.isEmpty();
      this.currentJobs = this.jobService.getFilteredJobs(this.currentFilter);
    });
  }
}
