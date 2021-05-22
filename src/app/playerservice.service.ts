import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/player';
  }

  public addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.url, player);
  }

  public getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}s`);
  }

  public deletePlayer(id: number): Observable<unknown> {
    return this.http.delete(`${this.url}/${id}`);
  }

  public updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(this.url, player);
  }

  public getPlayersByName(name: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}s/name/${name}`);
  }
}
