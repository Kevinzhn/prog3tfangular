import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';

@NgModule({
  declarations: [VeiculoCreateComponent, VeiculoListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [VeiculoCreateComponent],
})
export class VeiculoModule {}
