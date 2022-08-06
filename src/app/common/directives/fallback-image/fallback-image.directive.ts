import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appFallbackImage]'
})
export class FallbackImageDirective {
  el = this.elRef.nativeElement

  @Input ('appFallbackImage') defaultImageSrc = ''

  constructor(private elRef: ElementRef<HTMLImageElement>) { }

  @HostListener('error')
  private onError() {
    if (!('hasLoadedDefault' in this.el.dataset)) {
      this.el.src = this.defaultImageSrc
    } else {
      this.el.style.display = 'none'
    }
    this.el.dataset['hasLoadedDefault'] = 'true'
  }

}
