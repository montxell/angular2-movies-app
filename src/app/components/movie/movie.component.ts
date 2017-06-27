import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any;

  constructor( public _ms: MoviesService,
               public activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( parameters => {
      console.log(parameters);
      this._ms.getMovie( parameters['id'])
          .subscribe( movie => {
            console.log(movie);
            this.movie = movie;
          })
    })

  }


  ngOnInit() {
  }

}
