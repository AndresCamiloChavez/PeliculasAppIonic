import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle, Pelicula } from '../models/intefaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page{
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoPorGenero: any[] = [];
  constructor(
    private dataLocal: DataLocalService,
    private movieService: MoviesService
  ) {}

  //cada vez que se abre el tab
  async ionViewWillEnter(){
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
    this.pelisPorGenero(this.generos, this.peliculas);
  }
  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]){
    this.favoritoPorGenero = [];
    generos.forEach( genero => {
      this.favoritoPorGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli => peli.genres.find( genPeli => genPeli.id === genero.id))
      });
    });
    console.log(this.favoritoPorGenero);
  }
}

