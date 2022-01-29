import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, PeliculaDetalle } from '../../models/intefaces/interfaces';
import { SwiperOptions } from 'swiper';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: string;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];
  config: SwiperOptions = {
    slidesPerView: 2.4,
    spaceBetween: -5,
    freeMode: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true, },
    fadeEffect: {crossFade: true}
  };
  constructor(private movieService: MoviesService, private modalController: ModalController) { }

  ngOnInit() {
    this.movieService.getMovieDetalle(this.id).subscribe(data => {
      this.pelicula = data;
    });
    this.movieService.getActorePelicula(this.id).subscribe(data => {
      this.actores = data.cast;
    });
  }


  regresar(){
    this.modalController.dismiss();
  }
  favorito(){

  }
}
