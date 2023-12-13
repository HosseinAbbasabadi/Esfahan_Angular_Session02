import { Component, Input } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { Task } from '../Task';
import { HighlightDirective } from '../highlight.directive';
import { TaskService } from '../task.service';

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
    NgClass,
    HighlightDirective],
  templateUrl: './task-table.component.html'
})
export class TaskTableComponent {

  tasks: Task[] = []

  constructor(private readonly taskService: TaskService) {
    this.referesh()
  }

  referesh() {
    this.tasks = this.taskService.list()
  }

  changeStatus(taskId: number, status: number) {
    const task = this.taskService.find(taskId)!
    task.status = status
  }

  deleteTask(taskId: number) {
    const task = this.taskService.find(taskId)!
    if (confirm(`Do you want to delete ${task.title}`) == true)
      this.taskService.delete(task)
  }

  trackByItems(index: number, task: Task): number {
    return task.id
  }
}
