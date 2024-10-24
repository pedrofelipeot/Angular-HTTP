import { Component } from '@angular/core';
import { Servico01Service } from '../../servicos/servico01.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(private exemploServico:Servico01Service){

  }
  

}
