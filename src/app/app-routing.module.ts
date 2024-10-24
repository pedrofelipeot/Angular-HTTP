import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaDinamicaComponent } from './componentes/rota-dinamica/rota-dinamica.component';

const routes: Routes = [
  {path:'selecoes/:id', component:RotaDinamicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
