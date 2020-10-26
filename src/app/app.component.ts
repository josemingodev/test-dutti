import {Component, OnDestroy} from '@angular/core';
import {AuthService} from '../modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'test-dutti';
  constructor(private authService: AuthService) {
  }
  ngOnDestroy() {
    this.authService.logout();
  }
}
