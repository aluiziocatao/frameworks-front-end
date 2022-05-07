import { Utils } from './../../utils/utils';
import { PacienteService } from './../../services/paciente.service';
import { ConvenioService } from './../../services/convenio.service';
import { ProfissionalService } from './../../services/profissional.service';
import { AtendimentoService } from './../../services/atendimento.service';
import { Paciente } from './../../models/paciente';
import { Convenio } from './../../models/convenio';
import { Profissional } from './../../models/profissional';
import { Atendimento } from './../../models/atendimento';
import { IComponentForm } from './../i-component-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styles: [
  ]
})

export class AgendaFormComponent implements OnInit, IComponentForm<Atendimento> {

  constructor(
    private route: ActivatedRoute,
    private servico: AtendimentoService,
    private servicoProfissional: ProfissionalService,
    private servicoConvenio: ConvenioService,
    private servicoPaciente: PacienteService
  ) { }

  registro: Atendimento = <Atendimento>{};
  profissionais: Profissional[] = Array<Profissional>();
  convenios: Convenio[] = Array<Convenio>();
  pacientes: Paciente[] = Array<Paciente>();
  compareById = Utils.compareById;

  submit(form: NgForm): void {

  }

  ngOnInit(): void {

    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) => {
        this.profissionais = resposta;
      }
    });

    this.servicoConvenio.get().subscribe({
      next: (resposta: Convenio[]) => {
        this.convenios = resposta;
      }
    });

    this.servicoPaciente.get().subscribe({
      next: (resposta: Paciente[]) => {
        this.pacientes = resposta;
      }
    });

    const id = this.route.snapshot.queryParamMap.get('id');
    if(id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Atendimento) => {
          this.registro = resposta;
        }
      });
    }
  }

}
