import { Component, ViewChild } from '@angular/core';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TaskTableComponent } from "./task/task-table/task-table.component";
import { TaskFormComponent } from "./task/task-form/task-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    FormsModule,
    IconButtonComponent,
    TaskTableComponent,
    TaskFormComponent
  ]
})
export class AppComponent {
  title = 'todo-list'
  @ViewChild('table') table: TaskTableComponent

  constructor() {
  }

  refereshList() {
    this.table.referesh()
  }
}