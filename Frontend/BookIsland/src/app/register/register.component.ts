import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Location} from '@angular/common';
import {CartService} from '../shared/services/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup!: FormGroup;
  @ViewChild('usernameCheck')
  usernameCheck: ElementRef | undefined;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private location: Location,
    private snackBar: MatSnackBar
  ) { }
  static passwordValidator({value: {password, confirmPassword}}: {value: {password: string, confirmPassword: string}}): null | {}{
    if (password !== confirmPassword){
      return {passwordNotMatch: 'Password not match'};
    }
    else { return null; }
  }

  register(registerFrom: FormGroupDirective): void{
    this.auth.checkEmail(registerFrom.value.username)
      .subscribe(res => {
        if (res.success){
          this.auth.register(registerFrom.value)
            .subscribe(res2 => {
              if (res2.success){
                this.auth.user = res2.user;
                this.location.back();
              }
            });
        }
        else {
          this.snackBar.open('This email is already registered!', 'Dismiss', {
            duration: 2000
          });
        }

      });
  }
  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ''
      }, {validators: [RegisterComponent.passwordValidator]})
    });
  }

}
