import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  deleteHeroe: string = '';

  heroes: string[]  = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Thor'
  ];

  borrarHeroe(): void {
    this.deleteHeroe = this.heroes.shift() || '';
  }

}
