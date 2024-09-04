import { inject, Injectable } from '@angular/core';
import { FilterService } from '../filter/filter.service';
import { BtnFeature } from './button.model';

@Injectable({ providedIn: 'root' })
export class ButtonService {
  filterServices = inject(FilterService);

  addFilterHandler(content: string, feature: BtnFeature) {
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

  removeFilterHandler(content: string, feature: BtnFeature) {
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
