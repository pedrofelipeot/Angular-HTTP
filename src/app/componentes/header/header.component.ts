import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  animals = [
    {nome : "pedro", type:"anta"},
    {nome : "felipe", type:"anta2"},
    {nome : "oliveira", type:"anta3"},
    {nome : "tavares", type:"anta4"},
    {nome : "pedro", type:"anta5"}
  ]
}
