import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root' // Singleton
})
export class TaskService {

  private tasks: Task[] = []
  private lsName = 'tasks'

  constructor() {
    this.tasks = this.initList()
  }

  initList(): Task[] {
    // return [
    //   {
    //     id: 1,
    //     title: 'Wake Up At 07:00',
    //     status: 1
    //   },
    //   {
    //     id: 2,
    //     title: 'Esfahan Angular Course Session 03',
    //     status: 1
    //   },
    //   {
    //     id: 3,
    //     title: 'Complete HRM Project',
    //     status: 1
    //   }
    // ]

    const list = JSON.parse(localStorage.getItem(this.lsName))
    if (!list) return []

    return list
  }

  list() {
    return this.tasks
  }

  add(task: Task) {
    this.tasks.push(task)
    localStorage.setItem(this.lsName, JSON.stringify(this.tasks))
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
    localStorage.setItem(this.lsName, JSON.stringify(this.tasks))
  }

  deleteAll() {
    localStorage.removeItem(this.lsName)
    this.tasks = []
  }
}