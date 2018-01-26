import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {PeopleServiceProvider} from "../../providers/people-service/people-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public peopleService: PeopleServiceProvider, public alertCtrl: AlertController) {}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Application décevante',
      subTitle: 'On ne peut pas toujours faire ce que l\'on veut...',
      buttons: ['OK']
    });
    alert.present();
  }
}
