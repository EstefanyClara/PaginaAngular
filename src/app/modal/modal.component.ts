import { Component, Inject, Injectable } from '@angular/core';
import { ApigameService } from '../service/apigame.service';
import { ModalService } from '../service/modal.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../game';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ModalComponent]
})
@Injectable({
  providedIn: 'root'
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public gameDetails: Game
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}


