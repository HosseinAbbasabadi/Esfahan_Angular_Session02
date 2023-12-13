import { Component, Input } from '@angular/core';
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { FormsModule } from '@angular/forms';
import { Task } from '../Task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  imports: [
    FormsModule,
    IconButtonComponent]
})
export class TaskFormComponent {
  taskTitle: string = ''
  @Input({ required: true }) tasks: Task[] = []

  addTask(event: string) {
    if (!this.taskTitle) {
      alert('Title cant be empty.')
      return
    }

    if (this.tasks.find(x => x.title == this.taskTitle)) {
      alert('Task already defined.')
      return
    }

    const task: Task = {
      id: this.tasks.length + 1,
      title: this.taskTitle,
      status: 1
    }

    this.tasks.push(task)
    this.taskTitle = ''
  }

  titleChanged() {
    console.log(this.taskTitle)
  }

  deleteAll() {
    this.tasks = []
  }
}
