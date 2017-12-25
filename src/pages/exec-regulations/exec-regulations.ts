import { filterContent } from './../../pipes/filtercontent/filtercontent';
import { localJsonService } from './../../providers/localdb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Firebase } from './../../providers/firebase';
/**
 * Generated class for the LawPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exec-regulations',
  templateUrl: 'exec-regulations.html',
})
export class ExecRegulationsPage {

  public execregulations  = {
    title: '',
    publishedDate: "",
    titles: []
  }
  public filterExec: string = '';
  public execDefinitions = {};
  public source = "exec-reg.json";

  constructor(public localJson: localJsonService, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecRegulationsPage');
    this.localJson.getData(this.source).subscribe((data) => {
      this.execregulations = data;
      this.execDefinitions = data.titles[0].chapters[0].articles[0].clauses;
    });
  }

}
