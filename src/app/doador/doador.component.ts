import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador.component.html',
  styleUrls: ['./doador.component.css']
})
export class DoadorDetalheComponent implements OnInit {
  doador: any = {};
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.carregarDoadorDetalhes();
  }

  carregarDoadorDetalhes(): void {


    if (this.id === 1) {
      this.doador = {
        nome: 'Gilton Francisco',
        idade: 25,
        tipoSanguineo: 'O+',
        sexo: 'Masculino',
        telefone: '99999-9999',
        dataCadastro: '2023-05-12'
      };
    } else if (this.id === 2) {
      this.doador = {
        nome: 'Isllâne Maria',
        idade: 22,
        tipoSanguineo: 'A-',
        sexo: 'Feminino',
        telefone: '98888-8888',
        dataCadastro: '2023-06-15'
      };
    }else if (this.id === 3) {
      this.doador = {
        nome: 'Yasmin de Lima',
        idade: '24',
        tipoSanguineo: 'B+',
        sexo: 'Feminino',
        telefone: '97777-7777',
        dataCadastro: '2022-08-21'
      };
    }else if (this.id === 4) {
      this.doador = {
        nome: 'Ystefani Mariana',
        idade: '19',
        tipoSanguineo: 'AB+',
        sexo: 'Feminino',
        telefone: '95555-55',
        dataCadastro: '2024-08-09'

    };

  }
  }
}
