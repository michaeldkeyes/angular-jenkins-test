import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../playerservice.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  public player: Player;

  constructor(private service: PlayerService, private router: Router) {
    this.player = new Player();
  }

  ngOnInit(): void {}

  addPlayer(): void {
    this.service.addPlayer(this.player).subscribe((res) => {
      this.player = {
        id: 0,
        name: '',
        age: 0,
        city: '',
        team: '',
      };
      this.router.navigate(['/playerList']);
    });
  }
}
