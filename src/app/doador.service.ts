import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {
  private doadores = [
    { id: 1, nome: 'Gilton Francisco', tipoSanguineo: 'O+', telefone: '99999-9999', dataDoacao: '2024-11-20' },
    { id: 2, nome: 'Isllâne Maria', tipoSanguineo: 'A-', telefone: '98888-8888', dataDoacao: '2024-11-19' },
    { id: 3, nome: 'Yasmin de Lima', tipoSanguineo: 'B+', telefone: '97777-7777', dataDoacao: '2024-11-18' },
    {id: 4, nome: 'Ystefani Mariana', tipoSanguineo: 'AB+', telefone: '95555-5555', dataDoacao: '2024-10-11'}
  ];

  constructor() {}

 
  getDoadores(): Observable<any[]> {
    return of(this.doadores);
  }


  registrarDoacao(doador: any): Observable<any> {
    const doadorIndex = this.doadores.findIndex(d => d.id === doador.id);
    if (doadorIndex !== -1) {
      this.doadores[doadorIndex] = doador;
    }
    return of(doador);
  }
}
