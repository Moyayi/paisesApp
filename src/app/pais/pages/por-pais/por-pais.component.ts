import { Component } from '@angular/core';
import {HttpParams, HttpClient} from '@angular/common/http'
import { PaisService } from '../../services/pais.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.sass']
})
export class PorPaisComponent {
  private _Error : boolean = false;
  busqueda : string = "";
  constructor(private servicio : PaisService){}

  buscar(){
    this._Error = false;
    this.servicio.buscarPais(this.busqueda)
      .subscribe({
        next: (v) => console.log(v),
        error : ({error}) => {
          console.log(this._Error)
          this._Error = true
          console.log(this._Error)
        },
      })
  }

  ErrorBusqueda() : boolean{
    return this._Error
  }
}
