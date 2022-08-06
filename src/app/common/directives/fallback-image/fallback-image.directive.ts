import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appFallbackImage]'
})
export class FallbackImageDirective {
  static readonly FALLBACK_TAG = 'hasLoadedDefault'
  static readonly FALLBACK_INDICATOR = 'true'
  
  el = this.elRef.nativeElement

  @Input ('appFallbackImage') defaultImageSrc = ''

  constructor(private elRef: ElementRef<HTMLImageElement>) { }

  @HostListener('error')
  private onError() {
    if (!(FallbackImageDirective.FALLBACK_TAG in this.el.dataset)) {
      this.el.src = this.defaultImageSrc
    } else {
      this.el.style.display = 'none'
    }
    this.el.dataset[FallbackImageDirective.FALLBACK_TAG] = 
      FallbackImageDirective.FALLBACK_INDICATOR
  }

}
