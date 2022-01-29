import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, PeliculaDetalle } from '../../models/intefaces/interfaces';
import { SwiperOptions } from 'swiper';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

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
    scrollbar: { draggable: true },
    fadeEffect: { crossFade: true },
  };
  constructor(
    private movieService: MoviesService,
    private modalController: ModalController,
    private dataLocal: DataLocalService
  ) {}

  ngOnInit() {
    this.movieService.getMovieDetalle(this.id).subscribe((data) => {
      this.pelicula = data;
    });
    this.movieService.getActorePelicula(this.id).subscribe((data) => {
      this.actores = data.cast;
    });
  }

  regresar() {
    this.modalController.dismiss();
  }
  favorito() {
    this.dataLocal.guardarPelicula(this.pelicula);
  }
}
