import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  
  
  private baseUrl = 'https://api.rawg.io/api/games/';
  private apiKey = 'f13a63b2d5ab4736a9ba944db1d8debb';
  
  
  constructor(private http: HttpClient) {}

 public getDetalle (id: number): Observable<Game>{
  const url = `${this.baseUrl}${id}?key=${this.apiKey}`;
  return this.http.get<Game>(url);
 }
}