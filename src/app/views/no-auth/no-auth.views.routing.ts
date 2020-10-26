import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

export class NoAuthViewsRouting {
  static ROUTES = {
    path: '',
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  };
}
