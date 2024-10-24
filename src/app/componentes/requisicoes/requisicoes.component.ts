import { Component, OnInit } from '@angular/core';
import { Servico01Service } from '../../servicos/servico01.service';
import { error } from 'node:console';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.css']
})
export class RequisicoesComponent implements OnInit {
  selecoes: any[] = [];
  novaSelecao: {
    idselecoes:number
    selecao: string;  
    grupo: string;   
  } = {
    idselecoes: 0,
    selecao: '',     
    grupo: ''      
  };
  
  constructor(private service: Servico01Service) {}

  ngOnInit(): void {
    this.carregarSelecoes();
  }

  carregarSelecoes(): void {
    this.service.getselecao().subscribe({
      next: (data) => {
        this.selecoes = data;
      },
      error: (error) => {
        console.error('Erro ao carregar seleções:', error);
      }
    });
  }

  addSelecao(): void { 
    this.service.postSelecao(this.novaSelecao).subscribe({
      next: (data) => {
        this.carregarSelecoes();
        this.novaSelecao = {idselecoes: 0 ,selecao: '', grupo: ''};  // Resetando para valores iniciais
      },
      error: (error) => {
        console.error('Erro ao adicionar seleção:', error);
      }
    });
  }
  atualizarSelecao() : void {
      this.service.putSelecao(this.novaSelecao.idselecoes, this.novaSelecao).subscribe({
        next: (data) => {
          this.carregarSelecoes();
          this.novaSelecao = { idselecoes: 0, selecao: '', grupo: '' }; // Resetar os campos
          console.log("Deu certo a atualização");
        },
        error: (error) => {
          console.log("Erro ao atualizar:", error);
        }
      });
    } 
    deletarSelecao():void{
      this.service.deleteSelecao(this.novaSelecao.idselecoes,this.novaSelecao).subscribe({
        next:(data)=>{
          this.carregarSelecoes();
          this.novaSelecao = { idselecoes: 0, selecao: '', grupo: '' }; // Resetar os campos
          console.log("Deu certo o delete");
        },
        error: (error)=>{
          console.log('erro no delete:', error)
        }
      })
    }
}
