import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Celebrity, Occupation } from '../../interfaces/celebrity.interfaces';
import { CelebrityService } from '../../services/celebrity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-celebrity',
  templateUrl: './new-celebrity.component.html',
  styles: [
  ]
})
export class NewCelebrityComponent  implements OnInit{
  //form reactivo
  public celebrityForm = new FormGroup({
    id:         new FormControl('',{nonNullable:true}),
    age:        new FormControl('',{nonNullable:true}) ,
    name:       new FormControl('',{nonNullable:true}),
    nationality:new FormControl('',{nonNullable:true}),
    occupation: new FormControl<Occupation>(Occupation.actor),
    peliculas:  new FormControl('',{nonNullable:true}),
    alt_img:    new FormControl('',{nonNullable:true})
  })
  constructor(
    private celebritiesService: CelebrityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  private snackbar: MatSnackBar,
  private dialog: MatDialog) {}


      public occupations =[
        {id:'Actor', desc:'actor'},
        {id:'Producer', desc:'productor'}
      ]

    get currentCelebrity(): Celebrity{
      const celebrity= this.celebrityForm.value as unknown as Celebrity;
      return celebrity;

    }
    ngOnInit(): void {
      if(!this.router.url.includes('edit')) return;

      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.celebritiesService.getCelebrityById(id)),

      ).subscribe(celebrity => {

        if(!celebrity) {return this.router.navigateByUrl('/');}

        this.celebrityForm.reset(celebrity as object);
        return;
      });

    }

  onSubmit():void{
    if(this.celebrityForm.invalid) return;

    if(this.currentCelebrity.id){

      this.celebritiesService.updateCelebrity(this.currentCelebrity)
      .subscribe(celebrity =>{
        //TODO mostrar snackvar
        this.showSnackbar(`${celebrity.name} updated!`);
      });
      return;
    }
    this.celebritiesService.addCelebrity(this.currentCelebrity)
    .subscribe (celebrity=> {
      //TODO mostrar snackvar Y navegar a /celebrity/edit/hero.id
      this.showSnackbar(`${celebrity.name} updated!`);
      this.router.navigate(['/celebrities/edit', celebrity.id]);
    });

  }

  onDeleteCelebrity(){
    if(!this.currentCelebrity.id) throw Error('Celebrity id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.celebrityForm.value,
    });

    dialogRef.afterClosed()
    .pipe(
      filter((result:boolean)=>result),
      switchMap(()=> this.celebritiesService.deleteCelebrityCelebrity(this.currentCelebrity.id)),
      filter((wasDeleted:boolean)=>wasDeleted),

    )
    .subscribe(result=>{
      this.router.navigate(['/celebrities']);


    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(!result) return;
    //   this.celebritiesService.deleteCelebrityCelebrity(this.currentCelebrity.id)
    //   .subscribe(wasDeleted=>{
    //     if(wasDeleted)
    //     this.router.navigate(['/celebrities'])

    //   })
    // });
  }
  showSnackbar(message:string):void{
    this.snackbar.open(message,'done', {duration:2500})

  }







}
