import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { IComponentList } from './../i-component-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styles: [
  ]
})

export class UsuarioListComponent implements OnInit, IComponentList<Usuario> {

  constructor( private servico: UsuarioService ) { }

  registros: Usuario[] = Array<Usuario>();

  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Usuario[]) => {
        this.registros = resposta.filter(item => {
          return [ true ].includes(item.ativo)
        });
      }
    });
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.get();
  }

}
