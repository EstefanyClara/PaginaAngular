import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game';

@Injectable({
  providedIn: 'root',
})
export class ApigameService {
  
  //private urlApi ='https://api.rawg.io/api/games?key=f13a63b2d5ab4736a9ba944db1d8debb';
  private apiKey= 'f13a63b2d5ab4736a9ba944db1d8debb';
  private apiJuego ='https://api.rawg.io/api/games?key=';

  constructor(private http: HttpClient) {}

  public getData(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiJuego}${this.apiKey}`);
}
}