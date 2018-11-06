import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import List from '../Array';
import {DisplayPage} from '../../pages/display/display';

/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  you=List;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
  Next(){
    this.navCtrl.push(DisplayPage);
  }
}
