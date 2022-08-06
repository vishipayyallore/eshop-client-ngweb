import { ElementRef } from '@angular/core';
import { FallbackImageDirective } from './fallback-image.directive';

describe('FallbackImageDirective', () => {
  it('should create an instance', () => {
    const directive = new FallbackImageDirective(
      new ElementRef(document.createElement('image') as HTMLImageElement))
    expect(directive).toBeTruthy();
  });
});
