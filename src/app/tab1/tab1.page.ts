import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RespuestaMDB, Pelicula } from '../models/intefaces/interfaces';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  config: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 15,
    pagination: { clickable: true },
    scrollbar: { draggable: true, },
    fadeEffect: {crossFade: true}
  };
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movieService.getFeature().subscribe(( data: RespuestaMDB )=> {
      this.peliculasRecientes = data.results;
      console.log(data);
    });
  }
}
