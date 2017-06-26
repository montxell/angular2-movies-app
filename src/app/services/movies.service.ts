import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MoviesService {

  private apiKey: string = "6ad6623787b6194dfece894e0762844e";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor( private jsonp: Jsonp ) { }


  getCinemaListings() {

    // Get dates for a week
    let fromDay = new Date();
    let toDay = new Date();
    toDay.setDate( toDay.getDate() + 7 );

    // Transform dates to String
    let fromDayString = `${ fromDay.getFullYear() }-${ fromDay.getMonth()+1 }-${ fromDay.getDate() }`;
    let toDayString = `${ toDay.getFullYear() }-${ toDay.getMonth()+1 }-${ toDay.getDate() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fromDayString }&primary_release_date.lte=${ toDayString }&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`; //&language=es

    return this.jsonp.get( url )
               .map( res => res.json() );
  }


  getMostPopular() {

    // To use jsonp we need a callback ->  callback=JSONP_CALLBACK
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`; //&language=es

    return this.jsonp.get( url )
               .map( res => res.json() );
  }


  getKidsMostPopular() {

    // To use jsonp we need a callback ->  callback=JSONP_CALLBACK
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`; //&language=es

    return this.jsonp.get( url )
               .map( res => res.json() );
  }


  searchMovie( text: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apiKey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
               .map( res => res.json() );
  }


}
