import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importação do novo HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Servico01Service } from './servicos/servico01.service';
import { TesteDiretivaDirective } from './diretivas/teste-diretiva.directive';
import { RequisicoesComponent } from './componentes/requisicoes/requisicoes.component';
import { RotaDinamicaComponent } from './componentes/rota-dinamica/rota-dinamica.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TesteDiretivaDirective,
    RequisicoesComponent,
    RotaDinamicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
   
    //provideHttpClient(withInterceptorsFromDi()), // Adicione isso para fornecer o HttpClient
    Servico01Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
