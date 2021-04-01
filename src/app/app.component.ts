import { Component } from '@angular/core';

import {GhibliService} from './ghibli.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  pelisJSON:JSON;
  limitePelis:any;

  constructor(private servicio:GhibliService){}

  obtenerPelis(){
  	this.servicio.obtenerPelisGhibli(this.limitePelis).subscribe((respuesta:any) => this.pelisJSON = respuesta);
  	console.log(this.pelisJSON);
  }

}
