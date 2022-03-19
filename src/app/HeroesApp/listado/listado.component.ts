import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

 heroes:string[]=['Goku','Gohan','Vegetta','IronMan'];
 heroDeleted:string='';
 deleteHero():void {
   this.heroDeleted =this.heroes.shift() || ''; 

//Or shift() --> end
}
}
