import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from './model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(public httpAutor : HttpClient) { 
    this.httpAutor=httpAutor;
  }

  getAutor(){
    return this.httpAutor.get("https://fakerestapi.azurewebsites.net/api/Authors");
  }
  getAuthorDetails(id:number){
    return this.httpAutor.get("https://fakerestapi.azurewebsites.net/api/Authors/" + id);
  }

}
