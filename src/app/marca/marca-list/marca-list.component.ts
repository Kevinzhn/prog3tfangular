import { Component } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Marca } from '../models/marca.model';
import { Router } from '@angular/router';
@Component({
  selector: 'gc-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css'],
})
export class MarcaListComponent {
  constructor(private marcaService: MarcaService, private router: Router) {}
  marcas: Marca[] = [];
  ngOnInit() {
    this.marcaService.listarMarcas().subscribe((dados) => {
      this.marcas = dados;
    });
  }
  deleteMessage = false;
  delete(id?: number) {
    this.marcaService.delete(id!).subscribe(
      (dado) => {
        console.log(dado);
        this.deleteMessage = true;
        this.marcaService.listarMarcas().subscribe((dados) => {
          this.marcas = dados;
        });
      },
      (error) => console.log(error)
    );
  }
  updateMarca(id?: number) {
    this.router.navigate(['edit-curso', id]);
  }
}
