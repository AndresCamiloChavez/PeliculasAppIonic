import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/models/intefaces/interfaces';
import { SwiperOptions } from 'swiper';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] =[];
  @Output() cargarMas = new EventEmitter();
  config: SwiperOptions = {
    slidesPerView: 2.1,
    spaceBetween: 5  ,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true, },
    fadeEffect: {crossFade: true}
  };
  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  onClick(){
    this.cargarMas.emit();
  }
  async verDetalle(id: string){
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {id}
    });
    modal.present();

  }
}
