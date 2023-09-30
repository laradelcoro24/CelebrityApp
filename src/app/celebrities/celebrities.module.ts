import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebritiesRoutingModule } from './celebrities-routing.module';
import { CelebrityPageComponent } from './pages/celebrity-page/celebrity-page.component';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutComponent } from './pages/celebrity-layout-page/layout.component';
import { NewCelebrityComponent } from './pages/new-celebrity/new-celebrity.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { CelebrityImagePipe } from './pipes/celebrity-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    CelebrityPageComponent,

    ListPageComponent,
    LayoutComponent,
    NewCelebrityComponent,
    SearchPageComponent,
    CardComponent,
    CelebrityImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    CelebritiesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CelebritiesModule { }
