import { NgModule } from "@angular/core";
import { CounterComponent } from './Counter.component';

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports:[
        CounterComponent
    ]
})
export class CounterAppModule {}