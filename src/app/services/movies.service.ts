import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../models/intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    // eslint-disable-next-line max-len
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?api_key=ce7a13d89ea2285f4f0b67dc91ce8d7c&language=es-COP&page=1&include_image_llaguage=es&primary_realse_date.gte=2022-01-1&primary_realse_date.lte=2022-02-1`);
  }
}
