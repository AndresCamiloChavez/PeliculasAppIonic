import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../models/intefaces/interfaces';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage ) {
    this.init();
   }
  async init(){
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }
  guardarPelicula(pelicula: PeliculaDetalle){
    this.peliculas.push(pelicula);
    this.storage.set('peliculas', this.peliculas);
  }
}
