import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { PlayersListComponent } from './players-list/players-list.component';

const routes: Routes = [
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'deletePlayer', component: DeletePlayerComponent },
  { path: 'searchPlayer', component: SearchPlayerComponent },
  { path: 'updatePlayer', component: UpdatePlayerComponent },
  { path: 'playerList', component: PlayersListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
