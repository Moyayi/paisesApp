import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { CapitalInterface } from '../interfaces/capital';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl = "https://restcountries.com/v3.1"
  
  constructor( private http: HttpClient ) { }
  
  buscarCapital(busqueda : string) : Observable<CapitalInterface[]> {
    const url = `${this.apiUrl}/capital/${busqueda}`
    return this.http.get<CapitalInterface[]>(url)
  }
}
