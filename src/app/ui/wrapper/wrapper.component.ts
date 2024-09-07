import { Component, inject, input } from '@angular/core';
import { ActionType, BtnFeature } from '../../button/button.model';
import { ButtonService } from '../../button/button.service';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
  host: {
    class: 'button-wrapper',
    '(click)': 'removeHandler()',
  },
})
export class WrapperComponent {
  content = input<string>();
  feature = input<BtnFeature>();
  buttonService = inject(ButtonService);

  removeHandler() {
    if (this.content() && this.feature()) {
      this.buttonService.removeFilterHandler(this.content()!, this.feature()!);
    }
  }
}
