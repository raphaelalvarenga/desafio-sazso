import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-sazso';

  constructor(private router: Router, private loginService: LoginService) { }

  // These method was initially created to show or not show the toolbar based on the screen page
  getUrl() {
    const url = this.router.url;

    return url === '/login' ? false : true;
  }

  // This method will be triggered whenever user clicks in logout
  logout() {
    this.loginService.logout();
  }
}
