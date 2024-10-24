import { Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appTesteDiretiva]'
})
export class TesteDiretivaDirective {


  @HostListener('click') clicar(){
    this.tamanho = '20px'
  }

  @HostBinding ('style.fontSize') tamanho : string = '';


  constructor(private variavel_ElementRef: ElementRef, private variavel_Render: Renderer2) {
    this.variavel_Render.setStyle(this.variavel_ElementRef.nativeElement,'background-color','red')
   }

}
