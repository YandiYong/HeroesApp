//This imports component symbol from angular core library
import { Component } from '@angular/core';  

//This gives Angular the information it needs to understand how this component should work.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {


     hero = 'WindStorm';

}
