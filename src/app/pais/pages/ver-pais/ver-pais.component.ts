import { Component, OnInit } from '@angular/core';
import { VerPaisService } from '../../services/ver-pais.service';
import { Router  } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.sass']
})
export class VerPaisComponent implements OnInit{
  private _idPais : String = "";
  country : any = null;
  url : string = "";
  constructor(
    private service : VerPaisService, 
    private router : Router,
    public sanitizer: DomSanitizer
    ){}

  ngOnInit(): void {
    this._idPais = this.router.url.split('/')[2]
    this.service.verPais(this._idPais)
      .subscribe({
        next : (v) => {
          this.country = v[0]
          this.url = this.country.maps.openStreetMaps+"&output=embed"
          console.log(this.url)
        },
        error : (e) => {
          console.log(e)
        }
      })
  }
}