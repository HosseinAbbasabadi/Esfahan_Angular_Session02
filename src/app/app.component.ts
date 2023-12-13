import { Component } from '@angular/core';
import { Task } from './Task';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { TaskTableComponent } from "./task-table/task-table.component";
import { TaskFormComponent } from "./task-form/task-form.component";

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
  tasks: Task[] = []

  getList(): Task[] {
    return [
      {
        id: 1,
        title: 'Wake Up At 07:00',
        status: 1
      },
      {
        id: 2,
        title: 'Esfahan Angular Course Session 03',
        status: 1
      },
      {
        id: 3,
        title: 'Complete HRM Project',
        status: 1
      }
    ]
  }

  constructor() {
    this.tasks = this.getList()
  }
}