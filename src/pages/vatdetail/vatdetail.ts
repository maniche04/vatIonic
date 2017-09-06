import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { localJsonService } from './../../providers/localdb';
/**
 * Generated class for the VatdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vatdetail',
  templateUrl: 'vatdetail.html',
})
export class VatdetailPage {

  public detailCode: String;
  public detailArticle = {
    clauses:"",
    content:""
  };

  constructor(private localdb:localJsonService,public navCtrl: NavController, public navParams: NavParams) {
    this.detailCode = '';
  }

  ionViewDidLoad() {

    this.detailCode = this.navParams.get('code');
    if (this.detailCode.substring(0,3) == 'T01') {
      this.detailArticle.clauses = this.navParams.get('definitions');
    } else {
      this.parseValue();
    }
  }
  //T01C00A01CL01PASP1

  parseValue() {
    if (this.detailCode.length > 7) {
      //article is available
      var lookupdata;
      var titlecode = Number(this.detailCode.substring(1,3));
      var chaptercode = Number(this.detailCode.substring(4,6));
      var articleref = this.detailCode.substring(0,9);

      titlecode = titlecode - 1;
      if (chaptercode > 0) {
        chaptercode = chaptercode -1;
      }
      this.localdb.getData('vat.json').subscribe((data) => {

        var chapters = data.titles[titlecode].chapters[chaptercode];
        for (let art of chapters.articles) {

          if (art.ref == articleref) {
            this.detailArticle = art;
          }
        }
      });

      if (this.detailCode.length > 11) {
        var clausecode = Number(this.detailCode.substring(11,13));
      }
    }
  }

  cleanContent(content) {
    if (content != null) {
      content = content.split('[').join('');
      content = content.split(']').join('');
      content = content.toString().split("<LNKS>").join("<span class='hidden' link='");
      content = content.split("<LNKC>").join("'>");
      content = content.split("<LNKE>").join("</span>");
      return content;
    }
  }
}
