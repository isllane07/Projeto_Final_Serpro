import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-doador',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastrarDoadorComponent {

  novoDoador = {
    nome: '',
    idade: null,
    peso: null,
    tipoSanguineo: '',
    sexo: '',
    telefone: ''
  };

  doadores: any[] = [
    { id: 1, nome: 'Gilton Francisco', tipoSanguineo: 'O+', telefone: '99999-9999', dataDoacao: '2024-11-20' },
    { id: 2, nome: 'Isllâne Maria', tipoSanguineo: 'A-', telefone: '98888-8888', dataDoacao: '2024-11-19' },
    { id: 3, nome: 'Yasmin de Lima', tipoSanguineo: 'B+', telefone: '97777-7777', dataDoacao: '2024-11-18' },
    {id: 4, nome: 'Ystefani Mariana', tipoSanguineo: 'AB+', telefone: '95555-5555', dataDoacao: '2024-10-11'}
  ];


  onSubmit() {
    if (this.validaCampos()) {

      const novoId = this.doadores.length ? Math.max(...this.doadores.map(doador => doador.id)) + 1 : 1;


      const doadorAdicionado = {
        ...this.novoDoador,
        id: novoId,
        dataDoacao: new Date().toISOString().split('T')[0]
      };


      this.doadores.push(doadorAdicionado);


      alert(`Doador ${this.novoDoador.nome} cadastrado com sucesso!`);


      this.novoDoador = { nome: '', idade: null, peso: null, tipoSanguineo: '', sexo: '', telefone: '' };
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }


  validaCampos() {
    return this.novoDoador.nome && this.novoDoador.idade && this.novoDoador.peso && this.novoDoador.tipoSanguineo && this.novoDoador.sexo && this.novoDoador.telefone;
  }
}
