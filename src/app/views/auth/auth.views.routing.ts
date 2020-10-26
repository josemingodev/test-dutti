import {AuthGuard} from '../../../modules/auth/auth.guard';
import {HomeComponent} from './home/home.component';


export class AuthViewsRouting {
  static ROUTES = {
    path: 'auth', canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
    ]
  };
}
