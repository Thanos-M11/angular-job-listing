import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { JOBS } from '../../data/data';
import { Filter } from '../filter/filter.model';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private jobs: Job[] = JOBS;

  public getJobs(): Job[] {
    return this.jobs;
  }

  public setJobs(jobs: Job[]) {
    this.jobs = jobs;
  }

  public getFilteredJobs(filter: Filter): Job[] {
    return this.jobs.filter((job) => {
      let isValid = true;
      if (filter.role) {
        isValid = isValid && filter.role === job.role;
      }
      if (filter.level) {
        isValid = isValid && filter.level === job.level;
      }
      if (filter.languages) {
        isValid =
          isValid &&
          filter.languages.every((language) => {
            return job.languages.includes(language);
          });
      }
      if (filter.tools) {
        isValid =
          isValid &&
          filter.tools.every((tool) => {
            return job.tools.includes(tool);
          });
      }
      return isValid;
    });
  }
}
