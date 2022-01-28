import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/intefaces/interfaces';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] =[];
  config: SwiperOptions = {
    slidesPerView: 3.4,
    spaceBetween: -10,
    pagination: { clickable: true },
    scrollbar: { draggable: true, },
    fadeEffect: {crossFade: true}
  };
  constructor() { }

  ngOnInit() {}

}
