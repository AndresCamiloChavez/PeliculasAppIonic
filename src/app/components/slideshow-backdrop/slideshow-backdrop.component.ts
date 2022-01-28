import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Pelicula } from '../../models/intefaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: Pelicula [] = [];
  config: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 15,
    pagination: { clickable: true },
    scrollbar: { draggable: true, },
    fadeEffect: {crossFade: true}
  };
  constructor() { }

  ngOnInit() {}

}
