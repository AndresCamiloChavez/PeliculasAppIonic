import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  ideas: string[] =['Spiderman', 'Superman', 'Avenger', 'El señor de los añillos', 'Flash'];
  constructor() {}
  buscar(event){
    console.log('buscar -> ', event.detail.value);
  }
}
