import { Component, inject, input, output } from '@angular/core';
import { ActionType, BtnFeature, ButtonConfigurator } from './button.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  content = input.required<string>();
  feature = input.required<BtnFeature>();
  actionType = input.required<ActionType>();
  withWrapper = input<boolean>();
  className = input<string>();

  action = output<ButtonConfigurator>();

  buttonClickHandler() {
    this.action.emit({
      content: this.content(),
      feature: this.feature(),
      actionType: this.actionType(),
    });
  }
}
