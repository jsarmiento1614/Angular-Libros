import { Component, OnInit } from '@angular/core';
import { Autor } from '../shared/model/autor';
import { AutorService } from '../shared/autor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-autor',
  templateUrl: './detalle-autor.component.html',
  styleUrls: ['./detalle-autor.component.css']
})
export class DetalleAutorComponent implements OnInit {
  AuthorDetails : Autor

  constructor(private autorService: AutorService, private route: ActivatedRoute) { 
    this.autorService = autorService;
    this.route = route;
  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(parameters => {
      let id =  Number(parameters.get("id"));
      this.getRole(id);
    });
  }


  getRole(id : number){
    this.autorService.getAuthorDetails(id)
    .subscribe((data : Autor) => this.AuthorDetails = data);
  }

}
