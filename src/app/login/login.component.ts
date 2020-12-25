import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '@app/classes/login.class';
import { LoginService } from '@app/services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login() {

    // The code will only flow if the login form is valid
    if (this.formLogin.status === 'VALID') {

      // These are user's credentials
      const credentials = new Login(this.formLogin.value.email, this.formLogin.value.password);

      // Call the service
      this.loginService
        .login(credentials)
        .subscribe(
          success => {

            // If it worked successfully, set the token in localStorage and redirect to home
            if (success.feedbacks.length === 0) {
              localStorage.setItem('desafio-raphael-token', success.data);
              this.router.navigate(['/']);
            }
          },

          error => {
            this.openSnackBar(error.error.feedbacks[0].msg);
          }
        );
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

}
