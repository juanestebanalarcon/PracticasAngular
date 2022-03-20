import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interface";

@Injectable()
export class dbzService {
  private  _personajes: Personaje[] = [
        {
          nombre:"Vegetta",
          poder:1000
        },
        {
          nombre:"Gotten",
          poder:2000
        }
      ]
      get personajes():Personaje[] {
          return [...this._personajes];
      }
    constructor() {
    //    console.log("Servicio inicializado.");
    }
    agregarPersonaje(args:Personaje):void {
        this._personajes.push(args);
    }
}