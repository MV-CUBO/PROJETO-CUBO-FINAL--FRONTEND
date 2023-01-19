import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/access/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }
  login(username:string, password: string) {
    this.authService.login(this.username, this.password)
    .subscribe(response => {
      if (response.hasOwnProperty('token')) {
        localStorage.setItem('token', response.token);
        const decodedToken = this.authService.getDecodedToken();
          if (decodedToken.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (decodedToken.role === 'patient') {
            this.router.navigate(['/patient']);
          }
        }
      });
  }
}
