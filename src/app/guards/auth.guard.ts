import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private snack: MatSnackBar, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (sessionStorage.getItem('USER') != null) {
            return true;
        } else {
            this.router.navigate(['/auth/login']);
            this.snack.open(`Vous n'avez pas accès. Connectez-vous`, 'OK');
            return false;
        }
    }
}
