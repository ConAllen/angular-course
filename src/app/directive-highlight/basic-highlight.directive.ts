import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[appBasicHighlight]'

})
export class BasicHighlightDirective implements OnInit {

  constructor( private spudRef: ElementRef) {

  }

  ngOnInit() {
    this.spudRef.nativeElement.style.backgroundColor = 'navy';
    this.spudRef.nativeElement.style.color = 'white';

  }
}


