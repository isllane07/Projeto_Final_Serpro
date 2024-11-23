import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoadorService {
  private doadores = [
    { id: 1, nome: 'João Silva', idade: 25, peso: 70, tipoSanguineo: 'O+', sexo: 'M', telefone: '99999-9999' },
    { id: 2, nome: 'Maria Souza', idade: 30, peso: 65, tipoSanguineo: 'A-', sexo: 'F', telefone: '98888-8888' },
    { id: 3, nome: 'Carlos Oliveira', idade: 35, peso: 75, tipoSanguineo: 'B+', sexo: 'M', telefone: '97777-7777' }
  ];

  getDoadores() {
    return [...this.doadores];
  }

  cadastrarDoador(doador: any) {
    const newId = this.doadores.length + 1;
    this.doadores.push({ ...doador, id: newId });
  }

  editarDoador(id: number, doador: any) {
    const index = this.doadores.findIndex(d => d.id === id);
    if (index !== -1) {
      this.doadores[index] = { ...doador, id };
    }
  }

  excluirDoador(id: number) {
    const index = this.doadores.findIndex(d => d.id === id);
    if (index !== -1) {
      this.doadores.splice(index, 1);
    }
  }

  getDoadorById(id: number) {
    return this.doadores.find(d => d.id === id);
  }
}
