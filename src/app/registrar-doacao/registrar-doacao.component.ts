import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-doacao',
  templateUrl: './registrar-doacao.component.html',
  styleUrls: ['./registrar-doacao.component.css']
})
export class RegistrarDoacaoComponent {

  doador: any = {
   
    doacoes: []
  };


  alimentado: string = '';
  saiuDoPais: string = '';


  registrarDoacao() {

    if (this.alimentado === 'Sim' && this.saiuDoPais === 'Não') {

      if (!this.doador.doacoes) {
        this.doador.doacoes = [];
      }
      const dataAtual = new Date().toLocaleDateString();
      this.doador.doacoes.push(`Doação registrada em ${dataAtual}`);
      alert('Doação registrada com sucesso!');
    } else {

      alert('Você não atende aos critérios para doar.');
    }
  }
}
