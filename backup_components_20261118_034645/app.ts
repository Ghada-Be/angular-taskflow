
import { Component } from '@angular/core';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
