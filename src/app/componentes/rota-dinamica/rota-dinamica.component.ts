import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servico01Service } from '../../servicos/servico01.service';

@Component({
  selector: 'app-rota-dinamica',
  templateUrl: './rota-dinamica.component.html',
  styleUrls: ['./rota-dinamica.component.css']
})
export class RotaDinamicaComponent implements OnInit {
  id: number = 0;
  selecoes: any; // Armazena a seleção buscada

  constructor(private route: ActivatedRoute, private service: Servico01Service) {}

  ngOnInit(): void {
    this.ListarSelecaoId();   // Chama a função de busca quando o ID é capturado
  }

  ListarSelecaoId(): void {
    this.service.buscarporID(this.id).subscribe({
      next: (data) => {
        this.selecoes = data; // Armazena os dados da seleção retornada
      },
      error: (error) => {
        console.log('Erro ao buscar seleção por ID:', error);
      }
    });
  }
}
