import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
    canMatch:[PublicGuard],
    canActivate:[PublicGuard],
  },
  {
    path:'celebrities',
    loadChildren: ()=> import('./celebrities/celebrities.module').then(m => m.CelebritiesModule),
    canMatch:[AuthGuard],
    canActivate:[AuthGuard],
  },
  {
    path:'404',
    component:Error404PageComponent,
  },
  {
    path:'',
    redirectTo: 'celebrities',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
