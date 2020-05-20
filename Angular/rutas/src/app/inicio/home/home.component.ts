
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly _router: Router,

    private readonly _router1: Router
  ) { }

  ngOnInit(): void {
  }

  irAUsuarioListar() {
    this._router.navigate(['/usuario', 'listar']);
  }

  irAPokemonEditar() {
    this._router1.navigate(['/pokemon', 'editar']);
  }
}