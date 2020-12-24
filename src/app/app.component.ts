import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-sazso';

  constructor(private router: Router) { }

  getUrl() {
    const url = this.router.url;

    return url === '/login' ? false : true;
  }
}
