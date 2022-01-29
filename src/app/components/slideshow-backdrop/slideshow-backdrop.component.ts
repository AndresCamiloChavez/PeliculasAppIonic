import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import { Pelicula } from '../../models/intefaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

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
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: string){
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
