import { Routes } from '@angular/router';
import { ListRoomsComponent } from './pages/rooms/list-rooms/list-rooms.component';
import { CreateRoomComponent } from './pages/rooms/create-room/create-room.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';
import { RoomDetailComponent } from './pages/rooms/room-detail/room-detail.component';

export const APP_ROUTES: Routes = [

    /*{ path: 'rooms/list', component: ListRoomsComponent },
    { path: 'rooms/create', component: CreateRoomComponent },*/
    {
        path: 'rooms', children: [
            { path: 'list', component: ListRoomsComponent },
            { path: 'create', component: CreateRoomComponent },
            { path: 'detail/:id', component: RoomDetailComponent }
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },

    //{ path: 'auth/login', component: LoginComponent }
    { path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(x => x.AuthenticationModule) },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];