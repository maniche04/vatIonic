import { Api } from './../../providers/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  constructor(public api: Api, navCtrl: NavController, public navParams: NavParams) {
  }

  public newsbox = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.api.get("api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%2Frss%2Fsearch%2Fsection%2Fq%2FUAE%2520Vat%2FUAE%2520Vat%3Fhl%3Den%26ned%3Dus")
    .map(res => this.newsbox = res.json().items).subscribe();
  }


}
