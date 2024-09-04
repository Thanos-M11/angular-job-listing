import { Injectable } from '@angular/core';
import { Filter } from './filter.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private initialState: Filter = {
    role: '',
    level: '',
    languages: [],
    tools: [],
  };

  private filterSubject = new BehaviorSubject<Filter>(this.initialState);
  filter$ = this.filterSubject.asObservable();

  public getFilter(): Filter {
    return this.filterSubject.getValue();
  }

  public setFilter(newFilter: Filter) {
    this.filterSubject.next(newFilter);
  }

  public clearFilter(): void {
    this.filterSubject.next(this.initialState);
  }

  public isEmpty(): boolean {
    if (Object.keys(this.filterSubject.getValue()).length === 0) {
      return true;
    } else {
      return (
        Object.values(this.filterSubject.getValue()).reduce(
          (acc, cur) => acc + cur.length,
          0
        ) === 0
      );
    }
  }
}
