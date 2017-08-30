import { localJsonService } from './../../providers/localdb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from './../../providers/firebase';
/**
 * Generated class for the LawPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-law',
  templateUrl: 'law.html',
})
export class LawPage {

  public vatlaw  = {
    title: '',
    publishedDate: ""
  }

  constructor(public localJson: localJsonService,public firebase: Firebase,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawPage');
    // this.firebase.get("vat.json")
    // .map(res => this.vatlaw = res.json()).subscribe();
    this.localJson.getData('vat.json').subscribe((data) => {
      this.vatlaw = data;
    });
  }

}
