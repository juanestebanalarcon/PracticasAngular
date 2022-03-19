import {Component} from '@angular/core';
@Component({
    selector:'app-Contador',
    template:`
    <h1>Hola mundo</h1>
    <h2>{{title}}</h2>
    <br>
    <h3>{{subtitle}}</h3>
    <button (click)="acumular(5)">{{+5}}</button>
    <!--en un botón () se especifican los eventos-->
    <span style="font-size: 20px;">{{base}}</span>
    <button (click)="acumular(-5)">{{-5}}</button>
`
})
export class CounterComponent {
  title:string = 'bases-app';
  subtitle:string = 'CounterApp';
  numero_incremento:number=0;
  //Eejercicio:
  base:number=5;
  //sumar():void {this.numero_incremento+=1;}
  //restar():void {this.numero_incremento-=1;}
  acumular(valor:number):void {this.base=this.base+valor;}

}