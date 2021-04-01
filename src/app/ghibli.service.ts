import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GhibliService {

  URL = "https://ghibliapi.herokuapp.com/films";

  constructor(private http:HttpClient) { }

  obtenerPelisGhibli(limite:any){
  	if (limite == "" || limite == null) return this.http.get(this.URL);
  	else{
  		var params = new HttpParams().set("limit",limite);
  		return this.http.delete(this.URL,{params})
  	}
  }
}
