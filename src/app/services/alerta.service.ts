import { Alerta } from './../models/alerta';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { this.controleAlerta = new Subject<Alerta>(); }

  private controleAlerta: Subject<Alerta>;

  enviarAlerta(alerta: Alerta): void{
    this.controleAlerta.next(alerta);
  }

  receberAlerta(): Observable<Alerta>{
    return this.controleAlerta.asObservable();
  }
}
