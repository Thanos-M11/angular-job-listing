import { Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { JobListComponent } from './job-list/job-list.component';
import { FooterComponent } from './footer/footer.component';
import { JobsService } from './job-list/jobs.service';
import { ButtonService } from './button/button.service';
import { FilterService } from './filter/filter.service';
import { Filter } from './filter/filter.model';
import { Job } from './job-list/job.model';

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
export class AppComponent {
  jobService = inject(JobsService);
  buttonService = inject(ButtonService);
  filterService = inject(FilterService);
  private destroyRef = inject(DestroyRef);

  currentFilter!: Filter;
  isFilterEmpty = true;
  currentJobs: Job[] = [];

  ngOnInit(): void {
    const subscription = this.filterService.filter$.subscribe((filter) => {
      this.currentFilter = filter;
      this.isFilterEmpty = this.filterService.isEmpty();
      this.currentJobs = this.jobService.getFilteredJobs(this.currentFilter);
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
