import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Job } from '../job-list/job.model';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css',
})
export class JobItemComponent {
  job = input.required<Job>();
}
