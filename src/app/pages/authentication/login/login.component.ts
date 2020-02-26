import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onLogin(mail: string, e: any) {
    console.log(`login: ${mail} - mot de passe: ${this.passwd.nativeElement.value}`);
  }

}
