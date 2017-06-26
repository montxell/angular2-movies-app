import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  // @Input means this information comes from outside this componenet
  @Input('title') title;
  @Input('movies') movies;


  constructor() { }

  ngOnInit() {
  }

}
