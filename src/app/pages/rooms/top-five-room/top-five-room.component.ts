import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
    selector: 'app-top-five-room',
    templateUrl: './top-five-room.component.html'
})
export class TopFiveComponent implements OnInit {

    rooms: Array<any>;

    constructor(private serv: RoomService) { }

    ngOnInit(): void {
        /*this.rooms = [
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];*/

        this.serv.getTopFive().subscribe(
            data => {
                this.rooms = data;
            }
        );

    }
}
