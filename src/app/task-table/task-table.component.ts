import { Component, Input } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { Task } from '../Task';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    IconButtonComponent,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass],
  templateUrl: './task-table.component.html'
})
export class TaskTableComponent {

  @Input({ required: true }) tasks: Task[] = []

  changeStatus(taskId: number, status: number) {
    const task = this.tasks.find(x => x.id == taskId)!
    task.status = status
  }

  deleteTask(taskId: number) {
    const task = this.tasks.find(x => x.id == taskId)!
    if (confirm(`Do you want to delete ${task.title}`) == true) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }

  trackByItems(index: number, task: Task): number {
    return task.id
  }
}
