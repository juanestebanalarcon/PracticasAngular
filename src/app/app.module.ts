import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './CounterApp/contador/Counter.component';
import { HeroeComponent } from './HeroesApp/heroe/heroe.component';
import { ListadoComponent } from './HeroesApp/listado/listado.component';
import { HeroesAppModule } from './HeroesApp/HeroesApp.module';
import { CounterAppModule } from './CounterApp/contador/CounterApp.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesAppModule,
    CounterAppModule,
    DbzModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
