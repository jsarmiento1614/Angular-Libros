import { Component, OnInit } from '@angular/core';
import { Autor } from '../shared/model/autor';
import { AutorService } from '../shared/autor.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autores : Array<Autor>
  constructor(private autorService: AutorService) { 
      this.autorService= autorService;
  }

  ngOnInit() {
    this.autorService.getAutor()
    .subscribe((data:Array<Autor>)=>{
      this.autores = data.slice(0, 10); // Limitar la cantidad de datos en la hoja
    }, error =>{
      console.log(`Error ${error}`)
    })
  }

}
