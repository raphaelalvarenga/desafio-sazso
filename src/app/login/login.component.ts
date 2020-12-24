import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '@app/classes/login.class';
import { LoginService } from '@app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.fb.group({
    email: ['raphael.treinamento@sazso.com.br', [Validators.required, Validators.email]],
    password: ['raphael123456', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.formLogin.status === 'VALID') {

      const credentials = new Login(this.formLogin.value.email, this.formLogin.value.password);

      this.loginService
        .login(credentials)
        .subscribe(
          success => {
            if (success.feedbacks.length === 0) {
              localStorage.setItem('desafio-raphael-token', success.data);
              this.router.navigate(['/']);
            }
          },

          error => {
            console.log(error);
          }
        );
    }
  }

}
