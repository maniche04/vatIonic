import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  constructor(private sanitizer:DomSanitizer){}

  transform(style) {
    //return this.sanitizer.bypassSecurityTrustStyle(style);
     return this.sanitizer.bypassSecurityTrustHtml(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
