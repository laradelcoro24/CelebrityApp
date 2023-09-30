import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/celebrity-layout-page/layout.component';
import { NewCelebrityComponent } from './pages/new-celebrity/new-celebrity.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CelebrityPageComponent } from './pages/celebrity-page/celebrity-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'new',
        component:NewCelebrityComponent
      },
      {
        path:'list',
        component:ListPageComponent
      },
      {
        path:'search',
        component:SearchPageComponent
      },
      {
        path:'edit/:id',
        component:NewCelebrityComponent
      },
      {
        path:':id',
        component:CelebrityPageComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebritiesRoutingModule { }
