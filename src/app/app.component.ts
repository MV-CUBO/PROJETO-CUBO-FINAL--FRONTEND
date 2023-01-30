import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './access/auth/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private router: Router){}

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  isLoginPage() {
    const isLoginPage = this.router.url.split('/').some((value) => value === 'login');
    return isLoginPage;
  }
}