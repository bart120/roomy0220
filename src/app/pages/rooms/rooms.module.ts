import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five-room/top-five-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { MaterialModule } from 'src/app/material.module';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TopFiveComponent,
        CreateRoomComponent,
        ListRoomsComponent,
        RoomDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        TopFiveComponent
    ],
    providers: [],
})
export class RoomsModule { }