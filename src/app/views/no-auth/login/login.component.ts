import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LoginService} from './login.service';
import {UserLoginModel} from './user-login.model';
import {ErrorDialogComponent} from '../../../components/common/error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material';
import {LoaderService} from '../../../components/common/layouts/loader/loader.service';
import {AuthService} from '../../../../modules/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public formLoginBuilder: FormBuilder;
  public formLogin: FormGroup;
  public loginErrorMessages;
  public subscription: Subscription[];

  constructor(private router: Router,
              private loginService: LoginService,
              private dialog: MatDialog,
              private loaderService: LoaderService,
              private authenticationService: AuthService) {
    this.subscription = [];
    this.loginErrorMessages = {
      email: [
        {type: 'required', message: 'Campo obligatorio'},
        {type: 'pattern', message: 'Email no válido'}
      ],
      password: [
        {type: 'required', message: 'Campo obligatorio'},
      ]
    };
    this.formLoginBuilder = new FormBuilder();
    this.formLogin = this.formLoginBuilder.group({
      email: new FormControl('',
        Validators.compose([Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl('',
        Validators.compose([Validators.required]))
    });
    this.authenticationService.logout();
  }

  isValidForm() {
    return this.formLogin.status === 'VALID';
  }

  onSubmit() {
    const customerLogin = new UserLoginModel(this.formLogin.get('email').value, this.formLogin.get('password').value);
    this.loaderService.show();
    this.loginService.loginUser(customerLogin)
      .then(() => {
        this.loaderService.hide();
        this.router.navigate(['/auth/starships']);
      })
      .catch((reason) => {
        this.loaderService.hide();
        this.dialog.open(ErrorDialogComponent, {
          width: '50px;',
          data: {
            imgSrc: '/assets/artwork/error_simbole.png',
            error: reason,
            textButton: 'OK'
          }
        });
      });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

}

