import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight') strokeWith: number;

    @HostListener('mouseenter') onMouseEnter() {
        this.addStroke();
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.removeStroke();
    }

    constructor(private el: ElementRef) {
    }

    private addStroke() {
        this.el.nativeElement.style.boxSizing = `border-box`;
        this.el.nativeElement.style.border = `solid ${this.strokeWith || 2}px`;
    }
    private removeStroke() {
        this.el.nativeElement.style.border = '';
    }
}
