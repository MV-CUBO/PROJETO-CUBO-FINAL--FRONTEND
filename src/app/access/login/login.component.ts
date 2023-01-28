import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/access/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData: any = {
    email: '',
    password: '',
  }

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  roleRedirection(token: any) {
    switch (token) {
      case 'ROLE_ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'ROLE_PATIENT':
        this.router.navigate([`/patient/pep`]);
        break;
    }
  }

  login() {
    this.authService.login(this.loginData.email, this.loginData.password)
      .subscribe(response => {
        if (response.hasOwnProperty('token')) {
          localStorage.setItem('token', response.token);
          const decodedToken = this.authService.getDecodedToken(response.token);
          this.roleRedirection(decodedToken.roles[0])
        }
      });
  }
}
