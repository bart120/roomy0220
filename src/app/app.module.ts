import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { RoomsModule } from './pages/rooms/rooms.module';
import { MaterialModule } from './material.module';
import { APP_ROUTES } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
//import { RoomService } from './services/room.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    MaterialModule,
    HomeModule,
    RoomsModule
  ],
  providers: [/*RoomService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
