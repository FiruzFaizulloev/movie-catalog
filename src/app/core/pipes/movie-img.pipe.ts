import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  private _imgUrl = 'https://raw.githubusercontent.com/sanzhikee/thefroot-task-frontend/master/content/assets/images/movie-covers/';

  transform(value: string, ...args: any[]): string {
    return this._imgUrl + value;
  }

}
