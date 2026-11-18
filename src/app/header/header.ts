
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  title = 'TaskFlow';
  canDelete = true;

  rename(): void {
    this.title = 'TaskFlow — Version 2';
    this.canDelete = true;
  }

  deleteTitle(): void {
    this.title = '';
    this.canDelete = false;
  }

  restoreTitle(): void {
    this.title = 'TaskFlow';
    this.canDelete = true;
  }
}
