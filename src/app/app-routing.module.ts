import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MarcaCreateComponent } from './marca/marca-create/component/marca-create.component';
import { MarcaEditComponent } from './marca/marca-edit/marca-edit.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { VeiculoCreateComponent } from './veiculo/veiculo-create/veiculo-create.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nova-marca',
    component: MarcaCreateComponent,
  },
  {
    path: 'listar-marcas',
    component: MarcaListComponent,
  },
  {
    path: 'edit-marca/:id',
    component: MarcaEditComponent,
  },
  {
    path: 'novo-veiculo',
    component: VeiculoCreateComponent,
  },
  {
    path: 'listar-veiculos',
    component: VeiculoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
