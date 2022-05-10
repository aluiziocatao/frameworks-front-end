import { ETipoAlerta } from './../../models/e-tipo-alerta';
import { AlertaService } from './../../services/alerta.service';
import { Component, OnInit } from '@angular/core';
import { Alerta } from 'src/app/models/alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styles: [
  ]
})
export class AlertaComponent implements OnInit {

  constructor( private servico: AlertaService) { }

  ngOnInit(): void {
    this.servico.receberAlerta().subscribe(alerta => {
      this.exibeAlerta(alerta);
    })
  }

  exibeAlerta(alerta: Alerta) {
    const elementoAlerta = document.querySelector<HTMLElement>('div.alerta');
    const elementoAlertaMensagem = document.querySelector<HTMLElement>('div.alerta span#mensagem');

    if(elementoAlerta && elementoAlertaMensagem){
      elementoAlertaMensagem.innerText = alerta.mensagem;
      elementoAlerta.classList.add(alerta.tipo);
    }
  }

  fechaAlerta(): void{
    const elementoAlerta = document.querySelector<HTMLElement>('div.alerta');
    if(elementoAlerta){
      elementoAlerta.classList.remove(ETipoAlerta.ERRO, ETipoAlerta.SUCESSO);
    }
  }

}
