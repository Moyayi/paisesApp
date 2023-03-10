import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { PaisInterface } from '../interfaces/pais';
import { RegionInterfaz } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl = "https://restcountries.com/v3.1"
  
  constructor( private http: HttpClient ) { }

  buscarPais( termino : string ) : Observable<PaisInterface[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<PaisInterface[]>(url)
  }
}
