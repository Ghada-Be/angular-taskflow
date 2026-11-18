
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

  private readonly initialTasks = [
    {
      id: 1,
      title: 'Lire le cours Angular',
      dueDate: '2026-11-15'
    },
    {
      id: 2,
      title: 'Installer le CLI',
      dueDate: '2026-11-16'
    },
    {
      id: 3,
      title: 'Créer TaskFlow',
      dueDate: '2026-11-17'
    }
  ];

  tasks = [...this.initialTasks];

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(
      task => task.id !== id
    );
  }

  clearTasks(): void {
    this.tasks = [];
  }

  restoreTasks(): void {
    this.tasks = [...this.initialTasks];
  }
}
