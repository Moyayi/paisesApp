import { Component } from '@angular/core';
import { RegionInterfaz, SearchedRegions } from '../../interfaces/region';
import { PaisService } from '../../services/pais.service';
import { RegionService } from '../../services/region.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.sass']
})
export class PorRegionComponent {

  constructor(private servicio : RegionService){}
  private _Error : boolean = false;
  busqueda : string = "";
  entriesRegions : any = null;

  buscarRegion(){
    this._Error = false;
    this.servicio.buscarRegion(this.busqueda)
      .subscribe({
        next: (v) => {
          this.entriesRegions = v;
          console.log(this.entriesRegions)
        },
        error : ({error}) => {
          console.log(this._Error)
          this._Error = true
          this.entriesRegions  = null;
          console.log(this._Error)
        },
      })
  }

  ErrorBusqueda() : boolean{
    return this._Error
  }
}
