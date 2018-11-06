import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import List from '../Array';
import { HomePage } from '../home/home';


/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  you=List;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }
Next(){
  this.navCtrl.push(HomePage)
}
}
