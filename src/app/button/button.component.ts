import { Component, inject, input } from '@angular/core';
import { ActionType, BtnFeature } from './button.model';
import { ButtonService } from './button.service';
import { WrapperComponent } from '../ui/wrapper/wrapper.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  content = input.required<string>();
  feature = input.required<BtnFeature>();
  actionType = input.required<ActionType>();
  withWrapper = input<boolean>();
  className = input<string>();
  buttonService = inject(ButtonService);

  buttonClickHandler() {
    switch (this.actionType()) {
      case 'add':
        this.buttonService.addFilterHandler(this.content(), this.feature());
        break;
      case 'remove':
        this.buttonService.removeFilterHandler(this.content(), this.feature());
        break;
      case 'clear':
        this.buttonService.removeFilterHandler(this.content(), 'clear');
        break;
    }
  }
}
