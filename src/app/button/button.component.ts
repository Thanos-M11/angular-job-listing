import { Component, inject, input } from '@angular/core';
import { BtnType } from '../filter/filter.model';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  content = input.required<string>();
  feature = input.required<BtnType>();
  withWrapper = input.required<boolean>();
  className = input<string>();

  filterServices = inject(FilterService);
  isFilterEmpty = this.filterServices.isEmpty();

  addFilterHandler(content: string, feature: BtnType) {
    switch (feature) {
      case 'role':
        this.filterServices.setFilter({
          ...this.filterServices.getFilter(),
          role: content,
        });
        break;

      case 'level':
        this.filterServices.setFilter({
          ...this.filterServices.getFilter(),
          level: content,
        });
        break;

      case 'languages':
        if (this.filterServices.getFilter().languages.includes(content)) {
          this.filterServices.setFilter(this.filterServices.getFilter());
        } else {
          this.filterServices.setFilter({
            ...this.filterServices.getFilter(),
            languages: [...this.filterServices.getFilter().languages, content],
          });
        }
        break;

      case 'tools':
        if (this.filterServices.getFilter().tools.includes(content)) {
          this.filterServices.setFilter(this.filterServices.getFilter());
        } else {
          this.filterServices.setFilter({
            ...this.filterServices.getFilter(),
            tools: [...this.filterServices.getFilter().tools, content],
          });
        }
        break;
      default:
        throw new Error('Unexpected filter case...');
    }
  }

  removeFilterHandler(content: string, feature: BtnType) {
    switch (feature) {
      case 'role':
        this.filterServices.setFilter({
          ...this.filterServices.getFilter(),
          role: '',
        });
        break;

      case 'level':
        this.filterServices.setFilter({
          ...this.filterServices.getFilter(),
          level: '',
        });
        break;

      case 'languages':
        this.filterServices.setFilter({
          ...this.filterServices.getFilter(),
          languages: [
            ...this.filterServices
              .getFilter()
              .languages.filter((language) => language !== content),
          ],
        });
        break;

      case 'tools':
        this.filterServices.setFilter({
          ...this.filterServices.getFilter(),
          tools: [
            ...this.filterServices
              .getFilter()
              .tools.filter((tool) => tool !== content),
          ],
        });
        break;

      case 'clear':
        this.filterServices.clearFilter();
        break;

      default:
        console.log('default');
    }
  }
}
