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
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styles: [
  ]
})

export class AgendaFormComponent implements OnInit, IComponentForm<Atendimento> {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

    let data = new Date(this.registro.data);
    data = new Date(data.getTime() + data.getTimezoneOffset() * 60 * 1000);

    let registroModificado = Object.assign({}, this.registro);
    registroModificado.data = data.toISOString();

    if(this.registro.id){
      //PUT
      this.servico.update(registroModificado).subscribe({
        complete: () => {
          this.router.navigate(["/agenda"]);
        }
      });
    }else{
      //POST
      this.servico.insert(registroModificado).subscribe({
        complete: () => {
          form.resetForm();
        }
      });
    }
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
