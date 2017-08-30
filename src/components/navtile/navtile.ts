import { NewsPage } from './../../pages/news/news';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the NavtileComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'navtile',
  templateUrl: 'navtile.html'
})
export class NavtileComponent {

  text: string;

  @Input('icon') icon: String;
  @Input('title') title: String;
  @Input('subtitle') subtitle: String;
  @Input('link') link: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello NavtileComponent Component');
    this.text = 'Hello World';
  }

  openLink() {
    // this.navCtrl.setRoot(this.link + "Page", {}, {
    //   animate: true,
    //   direction: 'forward',
    // });
    this.navCtrl.push(this.link + "Page");
  }

}
