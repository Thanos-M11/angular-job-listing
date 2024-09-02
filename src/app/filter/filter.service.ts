import { Injectable, signal } from '@angular/core';
import { Filter } from './filter.model';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private initialState: Filter = {
    role: '',
    level: '',
    languages: [],
    tools: [],
  };

  private filter: Filter = this.initialState;

  public getFilter(): Filter {
    return this.filter;
  }

  public setFilter(filter: Filter) {
    this.filter = { ...this.filter, ...filter };
    console.log(this.filter);
  }

  public clearFilter(): void {
    this.filter = this.initialState;
    console.log(this.filter);
  }

  public isEmpty(): boolean {
    if (Object.keys(this.filter).length === 0) {
      return true;
    } else {
      return (
        Object.values(this.filter).reduce((acc, cur) => acc + cur.length, 0) ===
        0
      );
    }
  }
}
