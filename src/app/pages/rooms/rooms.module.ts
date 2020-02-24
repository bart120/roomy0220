import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five-room/top-five-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';

@NgModule({
    declarations: [
        TopFiveComponent,
        CreateRoomComponent,
        ListRoomsComponent
    ],
    imports: [CommonModule],
    exports: [
        TopFiveComponent
    ],
    providers: [],
})
export class RoomsModule { }