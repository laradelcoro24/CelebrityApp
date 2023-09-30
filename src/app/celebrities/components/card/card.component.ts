import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from '../../interfaces/celebrity.interfaces';

@Component({
  selector: 'celebrities-celebrity-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit {

  @Input()
  public celebrity!: Celebrity;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(!this.celebrity) throw Error('Celebrity property is requered')
  }

}
