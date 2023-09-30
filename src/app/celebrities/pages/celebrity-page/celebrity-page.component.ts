import { Component, OnInit } from '@angular/core';
import { CelebrityService } from '../../services/celebrity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Celebrity } from '../../interfaces/celebrity.interfaces';

@Component({
  selector: 'app-celebrity-page',
  templateUrl: './celebrity-page.component.html',
  styleUrls:['./celebrity-page.component.css']
})


export class CelebrityPageComponent implements OnInit {

  public celebrity?: Celebrity;

  constructor(
    private celebritiesService: CelebrityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(2000),
      switchMap( ({id})=> this.celebritiesService.getCelebrityById(id)),

    ).subscribe(celebrity=>{

      if(!celebrity) return this.router.navigate( ['/celebrities/list']);

      this.celebrity= celebrity;
      return;


    })

  }

  goBack():void{

    this.router.navigateByUrl('celebrities/list')
  }

}
