import { Component, OnInit } from '@angular/core';
import { ApigameService } from '../service/apigame.service';
import { Game } from '../game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  games: Game | any = {}
  

  constructor(private apigame: ApigameService) { }

  ngOnInit(): void {
      this.getGames(); 
  }

  getGames(){
      this.apigame.getData().subscribe(data => {
      this.games = data;
         console.log(this.games);

      })

  }
  
}
