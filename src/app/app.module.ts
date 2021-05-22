import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerService } from './playerservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    DeletePlayerComponent,
    UpdatePlayerComponent,
    SearchPlayerComponent,
    PlayersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
