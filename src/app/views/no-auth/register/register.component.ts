import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {LoaderService} from '../../../components/common/layouts/loader/loader.service';
import {ErrorDialogComponent} from '../../../components/common/error-dialog/error-dialog.component';
import {BasicDialogComponent} from '../../../components/common/basic-dialog/basic-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public formRegisterBuilder: FormBuilder;
  public formRegister: FormGroup;
  public registerErrorMessages;
  public subscription: Subscription[];

  constructor(private router: Router,
              private userService: UserService,
              private loaderService: LoaderService,
              private dialog: MatDialog) {
    this.subscription = [];
    this.registerErrorMessages = {
      email: [
        {type: 'required', message: 'Campo obligatorio'},
        {type: 'pattern', message: 'Email no válido'}
      ],
      password: [
        {type: 'required', message: 'Campo obligatorio'},
      ],
      name: [
        {type: 'required', message: 'Campo obligatorio'},
      ],
    };
    this.formRegisterBuilder = new FormBuilder();
    this.formRegister = this.formRegisterBuilder.group({
      email: new FormControl('',
        Validators.compose([Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl('',
        Validators.compose([Validators.required])),
      name: new FormControl('',
        Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
  }

  isValidForm() {
    return this.formRegister.status === 'VALID';
  }

  onSubmit() {
    this.loaderService.show();
    this.userService.create({
      email: this.formRegister.get('email').value,
      name: this.formRegister.get('name').value,
      password: this.formRegister.get('password').value
    }).then(() => {
      this.loaderService.hide();
      this.dialog.open(BasicDialogComponent, {
        width: '50px;',
        data: {
          imgSrc: '/assets/artwork/check_simbole.png',
          info: 'The account has been created successfully',
          textButton: 'OK'
        }
      }).afterClosed().subscribe(() => this.goLogin());
    }).catch(reason => {
      this.loaderService.hide();
      this.dialog.open(ErrorDialogComponent, {
        width: '50px;',
        data: {
          imgSrc: '/assets/artwork/error_simbole.png',
          error: reason,
          textButton: 'OK'
        }
      }).afterClosed().subscribe(() => this.formRegister.get('email').setErrors(Validators.compose([Validators.required])));
    });
  }

  goLogin() {
    this.router.navigate(['/login']).then();
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

}
