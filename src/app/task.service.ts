import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root' // Singleton
})
export class TaskService {

  tasks: Task[] = []

  constructor() {
    this.tasks = this.initList()
  }

  initList(): Task[] {
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

  list() {
    return this.tasks
  }

  add(task: Task) {
    this.tasks.push(task)
  }

  find(id: number) {
    return this.tasks.find(x => x.id == id)
  }

  findBy(title: string) {
    return this.tasks.find(x => x.title == title)
  }

  length() {
    return this.tasks.length
  }

  delete(task: Task) {
    const index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
  }

  deleteAll() {
    this.tasks = []
  }
}