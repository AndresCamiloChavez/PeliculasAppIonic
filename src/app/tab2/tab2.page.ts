import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../models/intefaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  ideas: string[] =['Spiderman', 'Superman', 'Avenger', 'El señor de los añillos', 'Flash'];
  peliculas: Pelicula[] = [];
  isVisible = false;
  constructor(private movieService: MoviesService, private modalController: ModalController) {}
  buscar(event){
    this.isVisible = true;
    this.textoBuscar = event.detail.value;
    this.textoBuscar = this.textoBuscar.trim();
    if(this.textoBuscar.length > 3){
      this.movieService.buscarPelicula(this.textoBuscar).subscribe(data =>{
        this.isVisible = false;
        this.peliculas = data.results;
      });
    }else{
      this.peliculas= [];
    }
  }
  async verDetalle(id){
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {id},
    });
    modal.present();
  }
}
