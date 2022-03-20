import { Component} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
//import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

nuevo: Personaje ={
  nombre:'Jose',
  poder:45000
}
/*
get personajes() {
  return this.dbzService.personajes;
}

agregarNuevoPersonaje(args:Personaje) {
  console.log(args);
this.personajes.push(args);
}
*/
constructor(/*private dbzService: dbzService*/){}
}
