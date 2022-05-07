import { Convenio } from './../models/convenio';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICrudService } from './i-crud-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService implements ICrudService<Convenio>{

  constructor( private http: HttpClient ) { }

  apiUrl: string = environment.apiUrl + '/convenio/';

  get(termoBusca?: string): Observable<Convenio[]> {
    let url = this.apiUrl;
    if(termoBusca){
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Convenio[]>(url);
  }

  getById(id: number): Observable<Convenio> {
    let url = this.apiUrl + id;
    return this.http.get<Convenio>(url);
  }

  insert(objeto: Convenio): Observable<Convenio> {
    return this.http.post<Convenio>(this.apiUrl, objeto);
  }

  update(objeto: Convenio): Observable<Convenio> {
    return this.http.put<Convenio>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    let url = this.apiUrl + id;
    return this.http.delete<void>(url);
  }
}
