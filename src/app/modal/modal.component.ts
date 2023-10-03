import { Component, Inject, Injectable } from '@angular/core';
import { ApigameService } from '../service/apigame.service';
import { ModalService } from '../service/modal.service';
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


}



