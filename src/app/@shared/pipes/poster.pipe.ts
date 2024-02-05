import { Pipe, PipeTransform } from '@angular/core';
import { imagesUrl } from "../../@core/constants";

@Pipe({
  name: 'mvPoster',
  standalone: true
})
export class PosterPipe implements PipeTransform {

  transform(posterPath: string): string {
    return `${imagesUrl}${posterPath}`;
  }

}
