import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  filterService = inject(FilterService);
  filter = this.filterService.getFilter();
  isFilterEmpty = this.filterService.isEmpty();
}
