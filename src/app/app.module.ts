import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoadorListaComponent } from './doador-lista/doador-lista.component';
import { CadastrarDoadorComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DoadorService } from './doador.service';
import { RegistrarDoacaoComponent } from './registrar-doacao/registrar-doacao.component';
import { EditarDoadorComponent } from './editar-doador/editar-doador.component';
import { CustomDatePipe } from './custom-date.pipe';
import { DoadorDetalheComponent } from './doador/doador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DoadorListaComponent,
    CadastrarDoadorComponent,
    RegistrarDoacaoComponent,
    EditarDoadorComponent,
    CustomDatePipe,
    DoadorDetalheComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [DoadorService],
  bootstrap: [AppComponent]

})
export class AppModule { }
