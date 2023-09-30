import { Celebrity } from './../../interfaces/celebrity.interfaces';
import { Component, OnInit } from '@angular/core';

import { CelebrityService } from '../../services/celebrity.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  public celebrities: Celebrity[]=[];

  constructor(private celebrityService:CelebrityService ){}

  ngOnInit(): void {
      this.celebrityService.getCelebrity()
      .subscribe( celebrities => this.celebrities= celebrities )
  }

}
