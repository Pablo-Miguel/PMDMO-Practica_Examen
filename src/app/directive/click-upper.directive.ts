import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

type Config = {color: String};

@Directive({
  selector: '[clickUpper]'
})
export class ClickUpperDirective {

  @HostBinding('id') private cadId!: String;

  @Input('clickUpper') config: Config = {
    color: 'predeterminado'
  }

  constructor(private el: ElementRef) {
    
  }

  @HostListener('click') onClick(){
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toUpperCase();
    this.el.nativeElement.className = this.config.color;
    this.cadId = "HolaMundo";
  }

}
