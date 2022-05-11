import { LoginService } from './../../services/login.service';
import { NgForm } from '@angular/forms';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [

  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private servico: LoginService
  ) { }

  usuario: Usuario = <Usuario>{};

  submit(form: NgForm): void {
    this.servico.login(this.usuario);
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
