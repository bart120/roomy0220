import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styles: []
})
export class CreateRoomComponent implements OnInit {

  pictures: Array<any> = [
    { image: 'Pegase.jpg', name: 'Pegase' },
    { image: 'Calliope.jpg', name: 'Calliope' },
    { image: 'Thalie.jpg', name: 'Thalie' }
  ];

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('10'),
    image: new FormControl('', [Validators.required])
  });

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {

  }

  submit(): void {
    //console.log(this.formRoom.value);
    if (this.formRoom.valid) {
      this.serv.insert(this.formRoom.value as Room).subscribe(
        data => {
          this.snack.open(`La salle ${data.name} est enregistrée avec l'id ${data.id}`, 'OK', { duration: 4000, verticalPosition: 'top' });
        },
        err => {
          this.snack.open(err.message, 'OK', { duration: 4000, verticalPosition: 'top' });
        }
      );
    }
  }

}
