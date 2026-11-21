
import {
  Component,
  signal,
  computed,
  effect
} from '@angular/core';

import { Task } from '../../models/task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

  // PAGE 13 : Tâches typées avec Task[]
  private readonly initialTasks: Task[] = [
    {
      id: 1,
      title: 'Lire le cours Angular',
      completed: false,
      priority: 'high',
      dueDate: '2026-11-15'
    },
    {
      id: 2,
      title: 'Installer le CLI',
      completed: false,
      priority: 'medium',
      dueDate: '2026-11-16'
    },
    {
      id: 3,
      title: 'Créer TaskFlow',
      completed: false,
      priority: 'low',
      dueDate: '2026-11-17'
    }
  ];

  // PAGE 14 : Créer un Signal
  tasks = signal<Task[]>([...this.initialTasks]);

  // Lire et compter les tâches
  count = computed(() => this.tasks().length);

  // Compter les tâches non terminées
  availableTasks = computed(() =>
    this.tasks().filter(task => !task.completed)
  );

  availableCount = computed(() =>
    this.availableTasks().length
  );

  // Titre de la nouvelle tâche
  newTitle = signal('');

  private nextId = 4;

  constructor() {
    effect(() => {
      console.log('Tâches disponibles :', this.availableTasks());
    });
  }

  // PAGE 14 : Ajouter avec update()
  addTask(): void {
    const title = this.newTitle().trim();

    if (title === '') return;

    const newTask: Task = {
      id: this.nextId++,
      title: title,
      completed: false,
      priority: 'medium'
    };

    this.tasks.update(items => [...items, newTask]);

    this.newTitle.set('');
  }

  // PAGE 15 : Recevoir l'événement de TaskCard
  onCompleted(id: number): void {
    this.tasks.update(items =>
      items.map(task =>
        task.id === id
          ? { ...task, completed: true }
          : task
      )
    );
  }

  // Supprimer une tâche
  removeTask(id: number): void {
    this.tasks.update(items =>
      items.filter(task => task.id !== id)
    );
  }

  // Vider avec set()
  clearTasks(): void {
    this.tasks.set([]);
  }

  // Restaurer avec set()
  restoreTasks(): void {
    this.tasks.set([...this.initialTasks]);
    this.newTitle.set('');
    this.nextId = 4;
  }
}
