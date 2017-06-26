import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cinemaListings: any;
  mostPopular: any;
  kidsMostPopular: any;

  constructor( public _ms: MoviesService ) {

    this._ms.getCinemaListings()
        .subscribe( data => {
          console.log(data);
          this.cinemaListings = data;
        })

    this._ms.getMostPopular()
        .subscribe( data => {
          console.log(data);
          this.mostPopular = data;
        })

    this._ms.getKidsMostPopular()
        .subscribe( data => {
          console.log(data);
          this.kidsMostPopular = data;
        })

  }

  ngOnInit() {
  }

}
