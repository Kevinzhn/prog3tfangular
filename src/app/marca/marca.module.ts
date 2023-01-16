import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarcaCreateComponent } from './marca-create/component/marca-create.component';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { MarcaEditComponent } from './marca-edit/marca-edit.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [MarcaCreateComponent, MarcaListComponent, MarcaEditComponent],
  exports: [MarcaCreateComponent],
})
export class MarcaModule {}
