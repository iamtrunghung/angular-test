import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHighlight = 'red';
  constructor(private el: ElementRef) {
   }

   ngOnInit(): void{
     console.log('ngOnit highlightDirective', this.appHighlight)
     this.el.nativeElement.style.color = this.appHighlight

   }
}


