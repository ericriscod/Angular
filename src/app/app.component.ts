import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-atributos></app-diretivas-atributos>
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-title name="Ericris"></app-title> -->
    <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(){};
}
