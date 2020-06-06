import { NuevafacturaComponent } from './nuevafactura/nuevafactura.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturaComponent } from './factura/factura.component';
import { PerfilComponent } from './perfil/perfil.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path: ':nombre/perfil',
    component: PerfilComponent,
  },
  {
    path: 'reserva',
    component: FacturaComponent,
  },
  {
    path: 'pacientes',
    component: ClientesComponent,
  },
  {
    path: 'servicios',
    component: ProductosComponent,
  },
  {
    path: 'nuevareserva',
    component: NuevafacturaComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class UsuarioRoutes {}
