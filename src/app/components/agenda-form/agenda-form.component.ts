import { Paciente } from './../../models/paciente';
import { Convenio } from './../../models/convenio';
import { Profissional } from './../../models/profissional';
import { Atendimento } from './../../models/atendimento';
import { IComponentForm } from './../i-component-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styles: [
  ]
})

export class AgendaFormComponent implements OnInit, IComponentForm<Atendimento> {

  constructor() { }

  registro: Atendimento = <Atendimento>{};
  profissionais: Profissional[] = Array<Profissional>();
  convenios: Convenio[] = Array<Convenio>();
  pacientes: Paciente[] = Array<Paciente>();

  submit(form: NgForm): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
