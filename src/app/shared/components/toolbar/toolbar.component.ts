import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleTableComponent } from '../people-table';
@Component({
  selector: 'shared-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    PeopleTableComponent,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(PeopleTableComponent, {
      width: 'min-content',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
    });
  }
}
