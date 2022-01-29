import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle } from '../../models/intefaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: string;
  pelicula: PeliculaDetalle = {};
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getMovieDetalle(this.id).subscribe(data => {
      this.pelicula = data;
    });
    this.movieService.getActorePelicula(this.id).subscribe(data => {
    });
  }

}
