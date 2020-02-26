import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styles: []
})
export class ListRoomsComponent implements OnInit {

  // private serv: RoomService;

  rooms: Array<Room> = null;

  constructor(private serv: RoomService) {
    // this.serv = service;
  }

  ngOnInit() {
    //this.rooms = this.serv.getAllRooms();
    this.serv.getAllRooms().subscribe(
      (data) => {
        this.rooms = data;
        console.log('test', this.rooms);
      },
      (err) => {
        console.warn(err);
      },
      () => {
        console.log('finish');
      }
    );

  }

}
