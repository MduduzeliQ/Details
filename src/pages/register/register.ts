import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import List from '../Array';
import {Users} from '../User';
import {DataPage} from '../../pages/data/data';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
FirstName: string;
Surname: string;
Identity: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
Next(){
  let a = new Users(this.FirstName, this.Surname, this.Identity)
  if (this.FirstName == undefined && this.Surname == undefined && this.Identity == undefined){
    const alert = this.alertCtrl.create({
      title: 'Access Denied!',
      subTitle: 'To be registered you need to supply us with your Information!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
List.push(a)
const alert = this.alertCtrl.create({
  title: 'Access Granted!',
  subTitle: 'Thank you for joining THE FLAME.',
  buttons: ['OK']
});
alert.present();
this.navCtrl.push(DataPage);
console.log(a)
  }
}
}
