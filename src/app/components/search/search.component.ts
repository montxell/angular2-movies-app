import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  movieToSearch: string = "";

  constructor( public _ms: MoviesService ) { }

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
