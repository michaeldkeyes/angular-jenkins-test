import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../playerservice.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css'],
})
export class UpdatePlayerComponent implements OnInit {
  public player: Player;

  constructor(private service: PlayerService, private router: Router) {
    this.player = new Player();
  }

  ngOnInit(): void {}

  updatePlayer(): void {
    this.service.updatePlayer(this.player).subscribe((res) => {
      this.player = new Player();
      this.router.navigate(['/playerList']);
    });
  }
}
