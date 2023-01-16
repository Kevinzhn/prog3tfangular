import { Component } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Veiculo } from '../models/veiculo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'gc-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css'],
})
export class VeiculoListComponent {
  constructor(private veiculoService: VeiculoService, private router: Router) {}
  veiculos: Veiculo[] = [];
  ngOnInit() {
    this.veiculoService.listarVeiculos().subscribe((dados) => {
      this.veiculos = dados;
    });
  }
  deleteMessage = false;
  delete(id?: number) {
    this.veiculoService.delete(id!).subscribe(
      (dado) => {
        console.log(dado);
        this.deleteMessage = true;
        this.veiculoService.listarVeiculos().subscribe((dados) => {
          this.veiculos = dados;
        });
      },
      (error) => console.log(error)
    );
  }
  updateVeiculo(id?: number) {
    this.router.navigate(['edit-curso', id]);
  }
}
