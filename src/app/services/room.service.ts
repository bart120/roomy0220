import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {

    constructor(private http: HttpClient) { }

    getAllRooms(): Observable<Array<Room>> {

        /*this.http.get(environment.URL_ROOMS).subscribe((data) => {
            console.log('data', data);
            return data;
        });*/

        return this.http.get<Array<Room>>(environment.URL_ROOMS);

        //return null;
        /*return [
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Uranie', image: 'Uranie.jpg' }
        ];*/
    }

    getRoomById(id: number): Observable<Room> {
        return this.http.get<Room>(`${environment.URL_ROOMS}/${id}`);
    }
}