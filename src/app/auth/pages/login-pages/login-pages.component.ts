import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styles: [
  ]
})
export class LoginPagesComponent {

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  onLogin(): void{
    this.authService.login('laradelcoro01@gmail.com','2222')
    .subscribe(user=>{

      this.router.navigate(['/']);

    })

  }


}
