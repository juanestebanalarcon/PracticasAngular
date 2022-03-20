import { Component, Input } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
//@Input()personajes:Personaje[]=[];
@Input() nuevo: Personaje ={
  nombre:'',
  poder:0
}
constructor(private dbzService:dbzService) {

}
//Emitir datos a través de un evento
//@Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();
agregar(){
  if(this.nuevo.nombre.trim().length==0) {return;}
 // console.log(this.nuevo);
  //this.personajes.push(this.nuevo)
  //Lo que se le envía.
  //this.onNuevoPersonaje.emit(this.nuevo);
  this.nuevo={
    nombre:'',
    poder:0
  } 
  this.dbzService.agregarPersonaje(this.nuevo);
}

}
