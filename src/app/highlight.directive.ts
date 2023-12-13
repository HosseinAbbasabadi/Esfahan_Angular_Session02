import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() color: string = ''

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color
  }
}
