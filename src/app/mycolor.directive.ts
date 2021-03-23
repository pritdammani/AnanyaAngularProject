import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @HostBinding('style.color') color: string;

  constructor(private elementRef: ElementRef) {
    this.color = 'white';
    elementRef.nativeElement.style.background = 'lightblue';
  }

  @HostListener('mouseover') onMouseOver() {
    this.color = 'blue';
    this.elementRef.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'white';
    this.elementRef.nativeElement.style.background = 'dodgerblue';
  }

}
