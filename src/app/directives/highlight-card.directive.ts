import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.backgroundColor = this.backgroundColor === 'white' ? 'green' : 'white';
  }
}
