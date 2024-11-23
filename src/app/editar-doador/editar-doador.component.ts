import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoadorService } from '../doador.service';  

@Component({
  selector: 'app-editar-doador',
  templateUrl: './editar-doador.component.html',
  styleUrls: ['./editar-doador.component.css']
})
export class EditarDoadorComponent implements OnInit {
  id: number = 0;
  doador: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doadorService: DoadorService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.carregarDoador();
  }

  carregarDoador(): void {



    if (this.id === 1) {
      this.doador = { id: 1, nome: 'Gilton Francisco', idade: 25, tipoSanguineo: 'O+', sexo: 'Masculino', telefone: '99999-9999' };
    } else if (this.id === 2) {
      this.doador = { id: 2, nome: 'Isllâne Maria', idade: 30, tipoSanguineo: 'A-', sexo: 'Feminino', telefone: '98888-8888' };
    }
  }

  onSubmit(): void {

    console.log('Doador editado:', this.doador);
    alert('Doador alterado com sucesso!');
    this.router.navigate(['/doadores']);

  }
}
