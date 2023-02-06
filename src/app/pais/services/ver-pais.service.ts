import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VerPaisService {

  private apiUrl = "https://restcountries.com/v3.1"
  constructor(private http: HttpClient ) { }

  verPais(idPais : String ) : Observable<any>{
    const url = `${this.apiUrl}/alpha/${idPais}`
    return this.http.get(url);
  }
}
