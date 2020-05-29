import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales

  correo = '';
  pass = '';
  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['Bryan', 'Esteban', 'Bruno'];

  constructor(
    private readonly _router: Router,
    private readonly _loginService:LoginService
  ) { }

  ngOnInit(): void {
    this._loginService
      .metodoPost(
        'http://localhost:1337/usuario',
        {
          nombre: "Bryan",
          edad: 21,
          correo: 'Marcelo',
          esCasado: false
        }
      )
      .subscribe(
        (resultadoPost) => {
          console.log('Respuest de Post');
          console.log(resultadoPost);
        }
      )

    this._loginService
      .metodoGet('localhost:1337/usuario')
      .subscribe((resultadoMetodoGet) => {
        console.log('Respuest de Get');
        console.log(resultadoMetodoGet);
      });

  }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Bryan', 'Esteban', 'Bruno'];
    }
  }

  valorSeleccionado(evento) {
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar() {
    console.log(this.valorAutocomplete);

    if (this.pass === '1234') {
      alert(this.correo);
      if (this.seleccionadoValor === 'Bryan') {
        alert('Estudiante');
        this._router.navigate(
          ['/estudiante', 'perfil']
        )
      }

      if (this.seleccionadoValor === 'Esteban') {
        alert('Profesor');
        this._router.navigate(
          ['/profesor', 'perfil']
        )
      }
    } else {
      alert('no ingreso');
    }
  }
  eliminarRegitroPorId() {
    this._loginService
      .metodoDelete('http://localhost:1337/usuario/2').subscribe(
        (respuestDelete) => {
          console.log(' repuesta de delete');
          console.log(respuestDelete);
        }
      )
  }
}