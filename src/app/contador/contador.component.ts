import { Component } from '@angular/core'

@Component( 
    {
        selector: 'app-contador',
        template: `
        
        <h1>{{titulo}}</h1>

        <button (click)="sunar()" >+1</button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)" >-{{base}}</button>
        <span>Su base es {{base}}</span>
        
        `
    }
    )

export class ContadorComponent {

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