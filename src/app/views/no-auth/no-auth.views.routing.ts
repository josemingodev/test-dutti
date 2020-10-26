import {RegisterComponent} from './register/register.component';

export class NoAuthViewsRouting {
  static ROUTES = {
    path: '',
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
    ]
  };
}
