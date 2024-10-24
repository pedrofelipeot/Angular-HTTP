import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { Carro } from '../../Carro';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  data = new Date()
  
  carros: Carro[] = [
    {nome: "gol",ano:2000, cor: "azul", ar:true},
    {nome: "camaro",ano:1311, cor: "seila", ar:false},
    {nome: "goceltal",ano:2090, cor: "preto", ar:false},
    {nome: "voigajy",ano:5600, cor: "amarelo", ar:true},
    {nome: "aaaa",ano:3311, cor: "branco", ar:true}
  ]
}
