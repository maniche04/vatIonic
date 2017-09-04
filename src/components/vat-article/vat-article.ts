import { VatdetailPage } from './../../pages/vatdetail/vatdetail';
import { Component, Input, ElementRef,ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
/**
 * Generated class for the VatArticleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'vat-article',
  templateUrl: 'vat-article.html'
})
export class VatArticleComponent {

  text: string;
  public istoggle: number;

  @Input('article') article: any;
  @Input('definitions') definitions: any;

  constructor(private elRef:ElementRef, private cdRef:ChangeDetectorRef,public popoverCtrl: PopoverController) {
    console.log('Hello VatArticleComponent Component');
    this.text = 'Hello World';
    this.istoggle = 0;

  }

  toggleDetail() {
    if (this.istoggle == 0) {
      this.istoggle = 1;
    } else {
      this.istoggle = 0;
    }
    this.cdRef.detectChanges();
    var el = this.elRef.nativeElement.querySelectorAll('.reflink');
    if (el) {
      for (let e of el) {
        e.addEventListener('click', this.launchRef.bind(this));
      }
    }

    var el2 = this.elRef.nativeElement.querySelectorAll('.deflink');
    if (el2) {
      for (let e of el2) {
        e.addEventListener('click', this.launchDef.bind(this));
      }
    }

  }

  launchRef(event) {
    var target = event.target || event.srcElement || event.currentTarget
    var idAttr = target.attributes.link;
    this.presentPopover(event,idAttr.nodeValue);
  }

  launchDef(event) {
    var target = event.target || event.srcElement || event.currentTarget
    var idAttr = target.attributes.link;
    this.presentPopover(event, idAttr.nodeValue);
  }

  presentPopover(myEvent, data) {
    let popover = this.popoverCtrl.create(VatdetailPage,{'code':data, 'definitions':this.definitions});
    popover.present({
      ev:myEvent
    });
  }

  getDynamic(html) {
    html = html.toString().split("<LNKS>").join("<span class='reflink' link='");
    html = html.split("<LNKC>").join("'>");
    html = html.split("<LNKE>").join("</span>");

    for (let def of this.definitions) {
      html = html.split("[" + def.name + "]").join("<span class='deflink' link='" + def.ref + "'>" + def.name + "</span>");
    }

    return html;
  }



}
