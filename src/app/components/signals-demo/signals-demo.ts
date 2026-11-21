
import {
  Component,
  signal,
  computed,
  effect
} from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [TaskCard],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.scss'
})
export class SignalsDemo {

  // PAGE 14 : SIGNALS

  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Lire Angular',
      completed: false,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Installer CLI',
      completed: true,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Créer TaskFlow',
      completed: false,
      priority: 'low'
    }
  ]);

  newTitle = signal('');

  availableTasks = computed(() =>
    this.tasks().filter(task => !task.completed)
  );

  emptyTasks = computed(() =>
    this.availableTasks().length === 0
  );

  all = computed(() => this.tasks().length);

  private nextId = 4;

  constructor() {
    effect(() => {
      console.log(
        'Tâches disponibles :',
        this.availableTasks()
      );
    });
  }

  addTask(): void {
    const title = this.newTitle().trim();

    if (title === '') return;

    this.tasks.update(tasks => [
      ...tasks,
      {
        id: this.nextId++,
        title: title,
        completed: false,
        priority: 'medium' as const
      }
    ]);

    this.newTitle.set('');
  }

  // PAGE 15 : COMMUNICATION PARENT-ENFANT

  onCompleted(id: number): void {
    this.completeTask(id);
  }

  completeTask(id: number): void {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  }

  clear(): void {
    this.tasks.set([]);
  }
}
