import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Filter } from './filter.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  filter = input.required<Filter>();
  isFilterEmpty = input.required<Boolean>();
}
