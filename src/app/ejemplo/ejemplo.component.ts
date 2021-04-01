import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  volverAtras(){
  	this.router.navigateByUrl('/');
  }

}
