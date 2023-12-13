import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button [type]="type" class="btn btn-{{color}} {{customClass}}">
    <i class="bi bi-{{icon}}"></i> {{caption}}
  </button>`
})
export class IconButtonComponent {
  @Input() customClass: string = ''
  @Input({ required: true }) icon: string = ''
  @Input() type: 'button' | 'menu' | 'reset' | 'submit' = 'button'
  @Input({ required: true, alias: 'label' }) caption: string = 'Button'
  @Input() color: 'primary' | 'danger' | 'warning' | 'info' | 'secondary' = 'primary'
}