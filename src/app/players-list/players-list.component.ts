import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../playerservice.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  public players!: Player[];

  constructor(private service: PlayerService) {}

  ngOnInit(): void {
    this.service.getAllPlayers().subscribe((res) => {
      console.log(res);
      this.players = res;
      console.log(this.players);
    });
  }
}
