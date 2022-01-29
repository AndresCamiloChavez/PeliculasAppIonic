import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, PeliculaDetalle } from '../../models/intefaces/interfaces';
import { SwiperOptions } from 'swiper';
import { ModalController, ToastController } from '@ionic/angular';
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
  isFavorite = false;
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
    private dataLocal: DataLocalService,
  ) {}

  async ngOnInit() {
    const existe = await this.dataLocal.existePelicula(this.id);
    this.isFavorite = existe;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
    this.isFavorite = !this.isFavorite;
  }
}
