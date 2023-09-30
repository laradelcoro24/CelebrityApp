import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'celebrities-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

  public sidebarItems=[
    {
      label:'Listado', icon:'label', url:'./list'
    },
    {
      label:'Añadir', icon:'add', url:'./new'
    },
    {
      label:'Buscador', icon: 'search', url:'./search'
    },
  ]

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  get user(): User |undefined{

    return this.authService.currentUser
  }

  onLoguot(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
