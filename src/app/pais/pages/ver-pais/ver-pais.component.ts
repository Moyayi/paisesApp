import { Component, OnInit } from '@angular/core';
import { VerPaisService } from '../../services/ver-pais.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.sass']
})
export class VerPaisComponent implements OnInit{
  private _idPais : String = "";
  country : any = null;
  constructor(private service : VerPaisService, private router : Router ){}

  ngOnInit(): void {
    this._idPais = this.router.url.split('/')[2]
    this.service.verPais(this._idPais)
      .subscribe({
        next : (v) => {
          console.log(v[0].flags)
          this.country = v[0]
        },
        error : (e) => {
          console.log(e)
        }
      })
  }

}