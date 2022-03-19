import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent {
nombre:string="Iron-Man";
edad:number=20; 
obtenerNombre():string {
    return `Datos del héroe: ${this.nombre} - ${this.edad}`;
}
get NombreCapitalizado() {return this.nombre.toUpperCase();}
cambiarNombre():void {this.nombre="SpiderMan";}
cambiarEdad():void {this.edad=90;}
}