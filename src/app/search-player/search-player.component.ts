import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../playerservice.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css'],
})
export class SearchPlayerComponent implements OnInit {
  public name: string;
  public players: Player[];

  constructor(private service: PlayerService) {
    this.name = '';
    this.players = [];
  }

  ngOnInit(): void {}

  searchPlayer(): void {
    this.service.getPlayersByName(this.name).subscribe((res) => {
      this.players = res;
    });
  }
}
