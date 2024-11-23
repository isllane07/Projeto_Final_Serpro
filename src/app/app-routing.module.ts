import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoadorListaComponent} from './doador-lista/doador-lista.component';
import { DoadorDetalheComponent } from './doador/doador.component';
import { CadastrarDoadorComponent } from './cadastro/cadastro.component';
import { RegistrarDoacaoComponent } from './registrar-doacao/registrar-doacao.component';
import { FormsModule } from '@angular/forms';
import { EditarDoadorComponent } from './editar-doador/editar-doador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-doador', component: DoadorListaComponent },
  { path: 'doador/:idDoador', component: DoadorDetalheComponent },
  { path: 'cadastro', component: CadastrarDoadorComponent },
  { path: 'registrar-doacao/:id', component: RegistrarDoacaoComponent },
  { path: 'editar/:id', component: EditarDoadorComponent },
  { path: 'detalhe/:id', component: DoadorDetalheComponent },
  { path: '', redirectTo: '/doadores', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
