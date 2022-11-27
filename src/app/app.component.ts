import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Cinounter App Jaime';
  numero: number = 10;
  base: number = 5;

  sunar(){
    this.numero += 1;
  }

  // restar(){
  //   this.numero -= 1;
  // }
  //Rama dev
//Este es el último coomiit de esta rama 01-counter

//Hola estoy en otra rama 02_component
  acumular(valor: number){
    this.numero += valor;
  }
}
