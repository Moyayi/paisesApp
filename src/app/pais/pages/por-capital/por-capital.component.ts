import { Component } from '@angular/core';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.sass']
})
export class PorCapitalComponent {

  constructor(private servicio : CapitalService){}
  private _Error : boolean = false;
  busqueda : string = "";
  entriesCapitales : any = null;


  buscarCapital(){
    this._Error = false;
    this.servicio.buscarCapital(this.busqueda)
      .subscribe({
        next: (v) => {
          this.entriesCapitales = v;
          console.log(this.entriesCapitales)
        },
        error : ({error}) => {
          console.log(this._Error)
          this._Error = true
          this.entriesCapitales  = null;
          console.log(this._Error)
        },
      })
  }

  ErrorBusqueda() : boolean{
    return this._Error
  }
}
