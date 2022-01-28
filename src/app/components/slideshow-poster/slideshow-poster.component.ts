import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Pelicula } from '../../models/intefaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
 @Input() peliculas: Pelicula[] = [];
 config: SwiperOptions = {
  slidesPerView: 3.4,
  spaceBetween: 10,
  pagination: { clickable: true },
  scrollbar: { draggable: true, },
  fadeEffect: {crossFade: true}
};
  constructor() { }

  ngOnInit() {}

}
