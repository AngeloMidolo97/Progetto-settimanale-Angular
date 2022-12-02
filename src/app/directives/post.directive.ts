import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPost]'
})
export class PostDirective {

  constructor(private element: ElementRef, private render: Renderer2) {
    render.setStyle(element.nativeElement,"backgroundColor", "yellow")
  }

}
