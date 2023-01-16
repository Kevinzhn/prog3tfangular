import { Marca } from '../../marca/models/marca.model';

export interface Veiculo {
  id?: number;
  placa: string;
  cor: number;
  anoModelo: number;
  marca: Marca;
}
