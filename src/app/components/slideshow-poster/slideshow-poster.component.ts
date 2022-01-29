import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { Pelicula } from '../../models/intefaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
 @Input() peliculas: Pelicula[] = [];
 config: SwiperOptions = {
  slidesPerView: 2.4,
  spaceBetween: 10,
  pagination: { clickable: true },
  scrollbar: { draggable: true, },
  fadeEffect: {crossFade: true}
};
  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  async verDetalle(id: string){
    const modal = await this.modalController.create({
        component: DetalleComponent,
        componentProps: {id}
    });
    modal.present();
  }
}
