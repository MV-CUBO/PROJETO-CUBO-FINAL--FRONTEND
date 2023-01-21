import { Component } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/access/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) { }

  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' :
      this.username.hasError('username') ? 'Not a valid username' :
        '';
  }

  login() {
    this.authService.login(this.username.value!, this.password.value!)
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
