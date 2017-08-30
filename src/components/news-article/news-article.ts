import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the NewsArticleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'news-article',
  templateUrl: 'news-article.html'
})
export class NewsArticleComponent {

  text: string;

  @Input('news') news: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    console.log('Hello NewsArticleComponent Component');
    this.text = 'Hello World';
  }

  public parseDomain = function(thestring) {
      var urlpattern = new RegExp("(http|ftp|https)://(.*?)/.*$");
      var parsedurl = thestring.match(urlpattern);
      return parsedurl[2].replace("www.","").replace("m.","");
  }

  public launchBrowser = function() {
    const browser = this.iab.create(this.news.link);
  }

}
