
import { Component, input, output } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss'
})
export class TaskCard {

  // Le parent envoie une tâche
  task = input.required<Task>();

  // L'enfant envoie l'ID de la tâche terminée
  completed = output<number>();

  // Événement supplémentaire pour la suppression
  removed = output<number>();

  markDone(): void {
    this.completed.emit(this.task().id);
  }

  remove(): void {
    this.removed.emit(this.task().id);
  }
}
