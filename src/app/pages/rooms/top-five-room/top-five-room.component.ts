import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-five-room',
    templateUrl: './top-five-room.component.html'
})
export class TopFiveComponent implements OnInit {

    rooms: Array<any>;

    constructor() { }

    ngOnInit(): void {
        this.rooms = [
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];
    }
}
