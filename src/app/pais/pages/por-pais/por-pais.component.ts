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
  
  constructor(private servicio : PaisService){}

  private _Error : boolean = false;
  busqueda : string = "";
  entriesCountries : any = null ;
  

  buscar(){
    this._Error = false;
    this.servicio.buscarPais(this.busqueda)
      .subscribe({
        next: (v) => {
          this.entriesCountries = v;
          console.log(this.entriesCountries)
        },
        error : ({error}) => {
          console.log(this._Error)
          this._Error = true
          this.entriesCountries  = null;
          console.log(this._Error)
        },
      })
    
  }

  ErrorBusqueda() : boolean{
    return this._Error
  }
}
