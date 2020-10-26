import {AuthGuard} from '../../../modules/auth/auth.guard';


export class AuthViewsRouting {
  static ROUTES = {
    path: 'auth', canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
  };
}
