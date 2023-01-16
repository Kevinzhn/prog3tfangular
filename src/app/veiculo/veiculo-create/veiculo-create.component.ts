import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MarcaService } from 'src/app/marca/marca.service';
import { Marca } from 'src/app/marca/models/marca.model';
import { Veiculo } from '../models/veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'gc-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css'],
})
export class VeiculoCreateComponent implements OnInit {
  veiculoForm!: FormGroup;
  submitted = false;
  marcas: Marca[] = [];
  cor!: string;
  placa!: string;
  anoModelo!: number;
  constructor(
    private veiculoService: VeiculoService,
    private formBuilder: FormBuilder,
    private marcaService: MarcaService
  ) {
    this.marcaService.listarMarcas().subscribe((dados: Marca[]) => {
      this.marcas = dados;
    });
  }
  ngOnInit(): void {
    this.veiculoForm = this.formBuilder.group({
      descricao: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      tempoDuracao: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
    });
  }
  save() {
    if (this.veiculoForm.valid) {
      const veiculo = this.veiculoForm.getRawValue() as Veiculo;
      this.veiculoService.save(veiculo).subscribe(
        () => (this.submitted = true),
        (error) => console.log(error)
      );
    }
  }
  addAulaForm() {
    this.submitted = false;
    this.veiculoForm.reset();
  }
}
