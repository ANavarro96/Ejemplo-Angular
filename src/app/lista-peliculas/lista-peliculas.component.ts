import { Component, OnInit } from '@angular/core';
import {GhibliService} from '../ghibli.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent {

pelisJSON:JSON;
  limitePelis:any;

  constructor(private servicio:GhibliService,private router:Router){}

  obtenerPelis(){
  	this.servicio.obtenerPelisGhibli(this.limitePelis).subscribe((respuesta:any) => this.pelisJSON = respuesta);
  	console.log(this.pelisJSON);
  }

  irEjemplo(){
  	this.router.navigateByUrl('/ejemplo');
  }
}
