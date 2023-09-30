import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Celebrity } from '../../interfaces/celebrity.interfaces';
import { CelebrityService } from '../../services/celebrity.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent  {

  public celebrities: Celebrity[]=[];
  public searchInput = new FormControl('');
  public selectedCelebrity?: Celebrity;

  constructor(private celebrityService: CelebrityService){}

  searchCelebrity(){
    const value:string= this.searchInput.value || '';
    this.celebrityService.getSuggestions(value)
    .subscribe(celebrities=> this.celebrities = celebrities)
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this.selectedCelebrity=undefined;
      return;
    }
    const celebrity: Celebrity= event.option.value;
    this.searchInput.setValue(celebrity.name);
    this.selectedCelebrity=celebrity;
  }


}
