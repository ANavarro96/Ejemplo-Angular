import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EjemploComponent} from './ejemplo/ejemplo.component'
import {ListaPeliculasComponent} from './lista-peliculas/lista-peliculas.component'
const routes: Routes = [
{
	path:"ejemplo",
	component: EjemploComponent
},
{
	path:"",
	component:ListaPeliculasComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
