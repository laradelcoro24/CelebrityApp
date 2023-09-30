import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './pages/auth-layout-page/layout.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginPagesComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
