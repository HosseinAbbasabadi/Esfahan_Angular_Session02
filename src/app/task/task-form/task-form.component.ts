import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButtonComponent } from "../../icon-button/icon-button.component";
import { FormsModule } from '@angular/forms';
import { Task } from '../Task';
import { HasPermissionDirective } from '../../has-permission.directive';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  //providers: [TaskService],
  imports: [
    FormsModule,
    IconButtonComponent,
    HasPermissionDirective],
})
export class TaskFormComponent {
  taskTitle: string = ''
  @Output() onDeleteAllClicked = new EventEmitter()

  constructor(private readonly taskService: TaskService) {
  }

  addTask(event: string) {
    if (!this.taskTitle) {
      alert('Title cant be empty.')
      return
    }

    if (this.taskService.findBy(this.taskTitle)) {
      alert('Task already defined.')
      return
    }

    const task: Task = {
      id: this.taskService.length() + 1,
      title: this.taskTitle,
      status: 1
    }

    this.taskService.add(task)
    this.taskTitle = ''
  }

  titleChanged() {
    console.log(this.taskTitle)
  }

  deleteAll() {
    this.taskService.deleteAll()
    this.onDeleteAllClicked.emit()
  }

  addToLocalStorage() {
    const name = 'hossein'
    localStorage.setItem('name', name)
  }
}
