import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../playerservice.service';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css'],
})
export class DeletePlayerComponent implements OnInit {
  public id: number;

  constructor(private service: PlayerService, private router: Router) {
    this.id = 0;
  }

  ngOnInit(): void {}

  deletePlayer(): void {
    this.service.deletePlayer(this.id).subscribe((res) => {
      this.router.navigate(['/playerList']);
    });
  }
}
