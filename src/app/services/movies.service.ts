import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, Genre } from '../models/intefaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularesPage = 0;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  generos: Genre[] = [];

  constructor(private http: HttpClient) { }


  buscarPelicula(query: string){
    return this.ejecutarQuery<RespuestaMDB>('/search/movie?a=0', query);
  }
  getMovieDetalle(id: string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }
  getActorePelicula(id: string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  getPopular(){
    this.popularesPage++;
    // const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    // eslint-disable-next-line max-len
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-COP&page=${this.popularesPage}`);
  }
  getFeature(){
    const hoy = new Date();
    const ultimaDia = new Date(hoy.getFullYear(), hoy.getMonth()+1, 0).getDate();
    const mes = hoy.getMonth()+1;
    let mesString;
    if(mes<10){
      mesString = '0'+ mes;
    }else{
      mesString = mes;
    }
    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimaDia}`;
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_realse_date.gte=${inicio}&primary_realse_date.lte=${fin}`);
  }
  cargarGeneros(): Promise<Genre[]>{
    return new Promise(resolve => {
      this.ejecutarQuery<any>(`/genre/movie/list?a=1`).subscribe((data) =>{
          this.generos = data.genres;
          console.log(this.generos);
          resolve(this.generos);
      });
    });
  }
  private ejecutarQuery<T>(query: string, valueBusqueda?: string){
    query = URL+query;
    query += apiKey+`&api_key=${apiKey}&language=es-ES&include_image_language=es&query=${valueBusqueda}`;
    return this.http.get<T>(query);
  }
}
