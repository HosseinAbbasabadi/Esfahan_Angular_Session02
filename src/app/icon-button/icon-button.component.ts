import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  template: `
    <button [type]="type" class="btn btn-{{color}} {{customClass}}" (click)="onBtnClick()">
      <i class="bi bi-{{icon}}"></i> {{caption}}
    </button>
  `
})
export class IconButtonComponent {
  @Input() customClass: string = ''
  @Input({ required: true }) icon: string = ''
  @Input() type: 'button' | 'menu' | 'reset' | 'submit' = 'button'
  @Input({ alias: 'label' }) caption: string = ''
  @Input() color: string = 'primary'

  @Output() clicked = new EventEmitter<string>()

  onBtnClick() {
    this.clicked.emit('some string')
  }
}