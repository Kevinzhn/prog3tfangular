import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './models/veiculo.model';
@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  private API = 'http://localhost:8080/api/veiculo';
  constructor(private httpClient: HttpClient) {}
  save(veiculo: Veiculo): Observable<Veiculo> {
    return this.httpClient.post<Veiculo>(this.API, veiculo);
  }
  listarVeiculos(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/veiculos');
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
  update(id?: number, Veiculo?: Veiculo): Observable<any> {
    return this.httpClient.put(`${this.API}/${id}`, Veiculo);
  }
  buscarPorId(id: number): Observable<any> {
    return this.httpClient.get(`${this.API}/${id}`);
  }
}
