import { IComponentList } from './../i-component-list';
import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/models/atendimento';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styles: [
  ]
})
export class AtendimentoListComponent implements OnInit, IComponentList<Atendimento>{

  constructor() { }

  registros: Atendimento[] = Array<Atendimento>();

  get(termoBusca?: string): void {
    throw new Error('Method not implemented.');
  }

  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
