import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { RegionInterfaz } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = "https://restcountries.com/v3.1"
  
  constructor( private http: HttpClient ) { }
  
  buscarRegion(busqueda : string) : Observable<RegionInterfaz[]> {
    const url = `${this.apiUrl}/region/${busqueda}`
    return this.http.get<RegionInterfaz[]>(url)
  }
}
