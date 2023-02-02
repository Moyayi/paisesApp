import { Component } from '@angular/core';
import {HttpParams, HttpClient} from '@angular/common/http'
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.sass']
})
export class PorPaisComponent {

  busqueda : string = "";
  constructor(private servicio : PaisService){}

  buscar(){
    this.servicio.buscarPais(this.busqueda).subscribe((resp) => console.log(resp))
  }
}
