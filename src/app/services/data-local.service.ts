import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../models/intefaces/interfaces';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage, private toastController: ToastController ) {
    this.init();
    this.cargarFavoritos();
   }
  async init(){
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      mode:'ios',
      translucent: true
    });
    toast.present();
  }
  guardarPelicula(pelicula: PeliculaDetalle){
    let existe = false;
    let mensaje = '';
    for(const peli of this.peliculas){
      if(peli.id === pelicula.id){
        existe = true;
        break;
      }
    }
    if(existe){
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
    }else{
      this.peliculas.push(pelicula);
      mensaje = 'Se agrego la peliculas a favoritos';
    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
  }
  async cargarFavoritos(){
    const peliculas = await this.storage.get('peliculas');
    //si es null envía un arreglo vació
    this.peliculas = peliculas || [];
    return peliculas;
  }
  async existePelicula(id){
    await this.cargarFavoritos();
    // eslint-disable-next-line eqeqeq
    const existe = this.peliculas.find(peli =>  peli.id == id);

    return (existe)? true : false;
  }
}
