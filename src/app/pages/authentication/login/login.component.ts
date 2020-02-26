import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  user: any = null;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('USER'));
    //console.log('user', this.user);
  }

  onLogin(mail: string, e: any) {
    console.log(`login: ${mail} - mot de passe: ${this.passwd.nativeElement.value}`);

    //appel serveur
    this.user = { login: mail, name: mail };

    sessionStorage.setItem('USER', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = null;
    sessionStorage.removeItem('USER');
  }

}
