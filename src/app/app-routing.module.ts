import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoAuthViewsRouting} from './views/no-auth/no-auth.views.routing';
import {AuthViewsRouting} from './views/auth/auth.views.routing';

const routes: Routes = [
  NoAuthViewsRouting.ROUTES,
  AuthViewsRouting.ROUTES,
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
