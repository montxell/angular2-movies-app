import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  movieToSearch: string = "";

  constructor( public _ms: MoviesService,
               public activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( parameters => {
      console.log(parameters);

      if ( parameters['text'] ) {
        this.movieToSearch = parameters['text'];
        this.searchMovie();
      }
    })

  }

  ngOnInit() {
  }

  searchMovie() {
    if ( this.movieToSearch.length == 0 ) {
      return;
    }

    this._ms.searchMovie( this.movieToSearch )
        .subscribe()
  }

}
