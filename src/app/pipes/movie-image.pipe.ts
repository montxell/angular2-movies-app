import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform(movie: any, poster: boolean = false ): any {

    let url = "http://image.tmdb.org/t/p/w500";

    let posterUrl = url + movie.poster_path;
    let backdropUrl = url + movie.backdrop_path;
    let noImage = "assets/img/no-image.jpg";


    if ( poster ) {
      if ( movie.poster_path != null ) {
        return posterUrl;
      } else {
        return noImage;
      }

    } else {

      if ( movie.backdrop_path != null ) {
        return backdropUrl;
      } else {
        if ( movie.poster_path != null ) {
          return posterUrl;
        } else {
          return noImage;
        }
      }

    }

  }

}
