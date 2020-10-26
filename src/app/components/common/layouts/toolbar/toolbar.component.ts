import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {AuthService} from '../../../../../modules/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() sectionActive: string;
  @Input() sidenav: MatSidenav;
  @Input() activateMenu: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
