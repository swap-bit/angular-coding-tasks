import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appBorder]'
})
export class BorderDirective {

  private elementRef = inject(ElementRef);

  @HostListener('click') onClick() {
    const nativeElement = this.elementRef.nativeElement;

    if (nativeElement.classList.contains('border-2')) {
      nativeElement.classList.remove('border-2', 'border-red-500');
    } else {
      nativeElement.classList.add('border-2', 'border-red-500');
    }
  }
}
