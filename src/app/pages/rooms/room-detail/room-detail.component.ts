import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styles: []
})
export class RoomDetailComponent implements OnInit {

  obsRoom$: Observable<Room>;

  constructor(private serv: RoomService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.obsRoom$ = this.serv.getRoomById(this.route.snapshot.params.id);
  }

}
