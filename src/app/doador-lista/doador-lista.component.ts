import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doador-lista',
  templateUrl: './doador-lista.component.html',
  styleUrls: ['./doador-lista.component.css']
})
export class DoadorListaComponent implements OnInit {
  doadores = [
    { id: 1, nome: 'Gilton Francisco', tipoSanguineo: 'O+', telefone: '99999-9999', dataDoacao: '2024-11-20' },
    { id: 2, nome: 'Isllâne Maria', tipoSanguineo: 'A-', telefone: '98888-8888', dataDoacao: '2024-11-19' },
    { id: 3, nome: 'Yasmin de Lima', tipoSanguineo: 'B+', telefone: '97777-7777', dataDoacao: '2024-11-18' },
    {id: 4, nome: 'Ystefani Mariana', tipoSanguineo: 'AB+', telefone: '95555-5555', dataDoacao: '2024-10-11'}
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verDetalhes(id: number) {
    this.router.navigate(['/detalhe', id]);
  }


  editarDoador(doadorId: number): void {
    this.router.navigate(['/editar', doadorId]);
  }

  excluirDoador(doadorId: number): void {
    this.doadores = this.doadores.filter(doador => doador.id !== doadorId);
    alert('Doador excluído com sucesso!');
  }
  registrarDoacao(id: number): void {
    this.router.navigate([`/registrar-doacao/${id}`]);
}
}
