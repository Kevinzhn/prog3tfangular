import { Marca } from './../../models/marca.model';
import { MarcaService } from './../../marca.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'gc-marca-create',
  templateUrl: './marca-create.component.html',
})
export class MarcaCreateComponent {
  sigla!: string;
  descricao!: string;
  constructor(private marcaService: MarcaService) {}

  save() {
    const marca: Marca = {
      sigla: this.sigla,
      descricao: this.descricao,
    };
    this.marcaService.save(marca).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => console.log(error)
    );
  }
}
