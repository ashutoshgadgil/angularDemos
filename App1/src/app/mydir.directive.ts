import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(private eleref:ElementRef) { }

  ngOnInit()
  {
    this.eleref.nativeElement.style.background='black';
    this.eleref.nativeElement.style.color='cyan';
    this.eleref.nativeElement.style.fontSize='20px';
  }
}
