import { Pipe, PipeTransform } from '@angular/core';
import { Celebrity } from '../interfaces/celebrity.interfaces';

@Pipe({
  name: 'celebrityImage'
})
export class CelebrityImagePipe implements PipeTransform {

  transform(celebrity: Celebrity, ) :string {
    if(!celebrity.id && !celebrity.alt_img){
      return 'assets/no-image.png';
    }
    if(celebrity.alt_img) return celebrity.alt_img;

    return `assets/celebrities/${celebrity.id}.jpg`
  }

}
