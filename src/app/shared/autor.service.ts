import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
