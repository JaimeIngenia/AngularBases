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

  acumular(valor: number){
    this.numero += valor;
  }
}
