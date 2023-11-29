import { Component } from '@angular/core';
import { Task } from './Task';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'todo-list'
  // tasks1 = new Array<Task>()
  tasks: Task[] = []

  constructor() {
    this.tasks = [
      {
        id: 1,
        title: 'Wake Up At 07:00',
        status: 3
      },
      {
        id: 2,
        title: 'Esfahan Angular Course Session 03',
        status: 2
      },
      {
        id: 3,
        title: 'Complete HRM Project',
        status: 1
      },
      {
        id: 4,
        title: 'PIS Meeting',
        status: 1
      },
    ]
  }
}