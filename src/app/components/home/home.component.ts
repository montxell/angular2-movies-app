import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cinemaListings: any;


  constructor( public _ms: MoviesService ) {

    this._ms.getCinemaListings()
        .subscribe( data => {
          console.log(data);
          this.cinemaListings = data;
        })
  }

  ngOnInit() {
  }

}
